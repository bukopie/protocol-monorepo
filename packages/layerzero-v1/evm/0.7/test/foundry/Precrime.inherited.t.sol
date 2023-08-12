// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.7.6;
pragma abicoder v2;

import "../../contracts/precrime/example/inherit/CounterI.sol";

import "./TestHelper.sol";

contract PrecrimeInheritedTest is TestHelper {
    uint16 internal chainIdA = 0x1;
    CounterI internal counterA;
    uint16 internal chainIdB = 0x2;
    CounterI internal counterB;
    uint16 internal chainIdC = 0x3;
    CounterI internal counterC;

    function setUp() public override {
        super.setUp();
        counterA = new CounterI(chainIdA);
        counterB = new CounterI(chainIdB);
        counterC = new CounterI(chainIdC);

        uint16[] memory aCounterPrecrimeEids = new uint16[](2);
        aCounterPrecrimeEids[0] = chainIdB;
        aCounterPrecrimeEids[1] = chainIdC;
        bytes32[] memory aCounterPrecrimeAddrs = new bytes32[](2);
        aCounterPrecrimeAddrs[0] = addressToBytes32(address(counterB));
        aCounterPrecrimeAddrs[1] = addressToBytes32(address(counterC));
        counterA.setRemotePrecrimeAddresses(aCounterPrecrimeEids, aCounterPrecrimeAddrs);

        uint16[] memory bCounterPrecrimeEids = new uint16[](2);
        bCounterPrecrimeEids[0] = chainIdA;
        bCounterPrecrimeEids[1] = chainIdC;
        bytes32[] memory bCounterPrecrimeAddrs = new bytes32[](2);
        bCounterPrecrimeAddrs[0] = addressToBytes32(address(counterA));
        bCounterPrecrimeAddrs[1] = addressToBytes32(address(counterC));
        counterB.setRemotePrecrimeAddresses(bCounterPrecrimeEids, bCounterPrecrimeAddrs);

        uint16[] memory cCounterPrecrimeEids = new uint16[](2);
        cCounterPrecrimeEids[0] = chainIdA;
        cCounterPrecrimeEids[1] = chainIdB;
        bytes32[] memory cCounterPrecrimeAddrs = new bytes32[](2);
        cCounterPrecrimeAddrs[0] = addressToBytes32(address(counterA));
        cCounterPrecrimeAddrs[1] = addressToBytes32(address(counterB));
        counterC.setRemotePrecrimeAddresses(cCounterPrecrimeEids, cCounterPrecrimeAddrs);
    }

    function test_send_receive() public {
        // A -> B
        counterA.increment(chainIdB);
        _deliver(counterA, counterB);
        // B -> C
        counterB.increment(chainIdC);
        _deliver(counterB, counterC);
        // C -> A
        counterC.increment(chainIdA);
        _deliver(counterC, counterA);
        // C -> B
        counterC.increment(chainIdB);
        _deliver(counterC, counterB);

        assertEq(counterA.totalCount(), 1);
        assertEq(counterA.outboundCount(chainIdB), 1); // A -> B outbound
        assertEq(counterA.inboundCount(chainIdC), 1); // C -> A inbound

        assertEq(counterB.totalCount(), 2);
        assertEq(counterB.outboundCount(chainIdC), 1); // B -> C outbound
        assertEq(counterB.inboundCount(chainIdA), 1); // A -> B inbound
        assertEq(counterB.inboundCount(chainIdC), 1); // C -> B inbound

        assertEq(counterC.totalCount(), 1);
        assertEq(counterC.outboundCount(chainIdA), 1); // C -> A outbound
        assertEq(counterC.outboundCount(chainIdB), 1); // C -> B outbound
        assertEq(counterC.inboundCount(chainIdB), 1); // B -> C inbound

        // broke increment
        counterA.brokeIncrement(chainIdB);
        _deliver(counterA, counterB);
        assertEq(counterA.outboundCount(chainIdB), 1); // A -> B outbound not incremented
        assertEq(counterB.inboundCount(chainIdA), 2); // B -> A inbound incremented
    }

    function test_precrime_passed() public {
        IPreCrimeBase.Packet[] memory packets = new IPreCrimeBase.Packet[](2);
        // A -> B
        counterA.increment(chainIdB);
        packets[0] = IPreCrimeBase.Packet({
            srcChainId: chainIdA,
            srcAddress: addressToBytes32(address(counterA)),
            nonce: 1,
            payload: ""
        });
        // C -> B
        counterC.increment(chainIdB);
        packets[1] = IPreCrimeBase.Packet({
            srcChainId: chainIdC,
            srcAddress: addressToBytes32(address(counterC)),
            nonce: 1,
            payload: ""
        });

        bytes[] memory states = _simulateOnB(packets);

        (uint16 code, ) = counterB.precrime(packets, states); // precrime packets on B
        assertEq(uint(code), uint(counterB.CODE_SUCCESS()));
    }

    function test_precrime_broke_outbound() public {
        // A -> B broke outbound
        counterA.brokeIncrement(chainIdB);
        IPreCrimeBase.Packet[] memory packets = new IPreCrimeBase.Packet[](1);
        packets[0] = IPreCrimeBase.Packet({
            srcChainId: chainIdA,
            srcAddress: addressToBytes32(address(counterA)),
            nonce: 1,
            payload: ""
        });

        bytes[] memory states = _simulateOnB(packets);

        uint16 code;
        bytes memory reason;
        (code, reason) = counterB.precrime(packets, states); // precrime packets on B
        assertEq(uint(code), uint(counterB.CODE_PRECRIME_FAILURE()));
        assertEq(reason, "Precrime: inboundCount > outboundCount");
    }

    function test_precrime_broke_total_count() public {
        // A -> B
        counterA.increment(chainIdB);
        counterB.brokeTotalCount(); // broke total count
        IPreCrimeBase.Packet[] memory packets = new IPreCrimeBase.Packet[](1);
        packets[0] = IPreCrimeBase.Packet({
            srcChainId: chainIdA,
            srcAddress: addressToBytes32(address(counterA)),
            nonce: 1,
            payload: ""
        });

        bytes[] memory states = _simulateOnB(packets);

        uint16 code;
        bytes memory reason;
        (code, reason) = counterB.precrime(packets, states); // precrime packets on B
        assertEq(uint(code), uint(counterB.CODE_PRECRIME_FAILURE()));
        assertEq(reason, "Precrime: totalCount > sum outboundCount");
    }

    function _deliver(CounterI from, CounterI to) internal {
        to.lzReceive(from.chainId());
    }

    function _simulateOnB(IPreCrimeBase.Packet[] memory _packets) internal returns (bytes[] memory states) {
        states = new bytes[](3);
        uint16 code;
        (code, states[0]) = counterA.simulate(new IPreCrimeBase.Packet[](0)); // get A state, no packets
        assertEq(uint(code), uint(counterA.CODE_SUCCESS()));
        (code, states[1]) = counterB.simulate(_packets); // simulate packets on B and get B state
        assertEq(uint(code), uint(counterB.CODE_SUCCESS()));
        (code, states[2]) = counterC.simulate(new IPreCrimeBase.Packet[](0)); // get C state, no packets
        assertEq(uint(code), uint(counterC.CODE_SUCCESS()));
    }
}
