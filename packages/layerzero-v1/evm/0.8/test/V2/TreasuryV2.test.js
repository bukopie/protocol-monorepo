const { expect } = require('chai');
const { getAddr, deployNew } = require('../../../0.7/utils/helpers');
const { VARS } = require('../../../0.7/utils/constants');
const { deployments, ethers } = require('hardhat');

describe('TreasuryV2:', function () {
    let badUser1, treasury, layerZeroToken, ultraLightNode;
    const { nativeBP, oracleFee, relayerFee } = VARS;

    before(async function () {
        ({ badUser1, layerzeroDeployer } = await getAddr(ethers));
    });

    beforeEach(async function () {
        await deployments.fixture(['test']);

        treasury = (await ethers.getContract('TreasuryV2')).connect(layerzeroDeployer);
        layerZeroToken = await deployNew('LayerZeroTokenMock');
        ultraLightNode = await ethers.getContract('UltraLightNodeV2');
    });

    it('setNativeBP() - reverts from non owner', async function () {
        await expect(treasury.connect(badUser1).setNativeBP(1)).to.revertedWith('Ownable: caller is not the owner');
    });

    it('withdrawZROFromULN() - reverts from non owner', async function () {
        await expect(treasury.connect(badUser1).withdrawZROFromULN(badUser1.address, 1)).to.revertedWith(
            'Ownable: caller is not the owner'
        );
    });

    it('withdrawNativeFromULN() - reverts from non owner', async function () {
        await expect(treasury.connect(badUser1).withdrawNativeFromULN(badUser1.address, 1)).to.revertedWith(
            'Ownable: caller is not the owner'
        );
    });

    it('setNativeBP() - set / emits event', async function () {
        const bp = nativeBP + 1;
        await expect(treasury.setNativeBP(bp)).to.emit(treasury, 'NativeBP').withArgs(bp);
        expect(await treasury.nativeBP()).to.equal(bp);
    });

    it('getFees()', async function () {
        await treasury.setNativeBP(nativeBP);
        await treasury.setFeeEnabled(true);
        const _nativeFee = await treasury.getFees(false, 5000, 5000);

        expect(_nativeFee).to.equal(nativeBP);
    });

    it('getFees() - returns 0 when not enabled', async function () {
        await treasury.setFeeEnabled(false);
        expect(await treasury.getFees(false, relayerFee, oracleFee)).to.equal(0);
    });

    it('getFees() - reverts when payInZro is not enabled', async function () {
        await treasury.setFeeEnabled(true);
        await expect(treasury.getFees(true, relayerFee, oracleFee)).to.revertedWith('LayerZero: ZRO is not enabled');
    });
});
