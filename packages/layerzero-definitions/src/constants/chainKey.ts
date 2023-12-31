import { ChainKey, EndpointId } from '../enums'

export const CHAIN_KEY: { [endpointId in EndpointId]: ChainKey } = {
    [EndpointId.ETHEREUM_MAINNET]: ChainKey.ETHEREUM,
    [EndpointId.BSC_MAINNET]: ChainKey.BSC,
    [EndpointId.AVALANCHE_MAINNET]: ChainKey.AVALANCHE,
    [EndpointId.POLYGON_MAINNET]: ChainKey.POLYGON,
    [EndpointId.ARBITRUM_MAINNET]: ChainKey.ARBITRUM,
    [EndpointId.OPTIMISM_MAINNET]: ChainKey.OPTIMISM,
    [EndpointId.FANTOM_MAINNET]: ChainKey.FANTOM,
    [EndpointId.SWIMMER_MAINNET]: ChainKey.SWIMMER,
    [EndpointId.DFK_MAINNET]: ChainKey.DFK,
    [EndpointId.HARMONY_MAINNET]: ChainKey.HARMONY,
    [EndpointId.DEXALOT_MAINNET]: ChainKey.DEXALOT,
    [EndpointId.CELO_MAINNET]: ChainKey.CELO,
    [EndpointId.MOONBEAM_MAINNET]: ChainKey.MOONBEAM,
    [EndpointId.INTAIN_MAINNET]: ChainKey.INTAIN,
    [EndpointId.FUSE_MAINNET]: ChainKey.FUSE,
    [EndpointId.GNOSIS_MAINNET]: ChainKey.GNOSIS,
    [EndpointId.APTOS_MAINNET]: ChainKey.APTOS,
    [EndpointId.KLAYTN_MAINNET]: ChainKey.KLAYTN,
    [EndpointId.METIS_MAINNET]: ChainKey.METIS,
    [EndpointId.COREDAO_MAINNET]: ChainKey.COREDAO,
    [EndpointId.METER_MAINNET]: ChainKey.METER,
    [EndpointId.OKX_MAINNET]: ChainKey.OKX,
    [EndpointId.GOERLI_MAINNET]: ChainKey.GOERLI,
    [EndpointId.ZKSYNC_MAINNET]: ChainKey.ZKSYNC,
    [EndpointId.SHRAPNEL_MAINNET]: ChainKey.SHRAPNEL,
    [EndpointId.DOS_MAINNET]: ChainKey.DOS,
    [EndpointId.ZKPOLYGON_MAINNET]: ChainKey.ZKEVM,
    [EndpointId.SEPOLIA_MAINNET]: ChainKey.SEPOLIA,
    [EndpointId.MOONRIVER_MAINNET]: ChainKey.MOONRIVER,
    [EndpointId.NOVA_MAINNET]: ChainKey.NOVA,
    [EndpointId.TENET_MAINNET]: ChainKey.TENET,
    [EndpointId.CANTO_MAINNET]: ChainKey.CANTO,
    [EndpointId.KAVA_MAINNET]: ChainKey.KAVA,
    [EndpointId.MANTLE_MAINNET]: ChainKey.MANTLE,
    [EndpointId.HUBBLE_MAINNET]: ChainKey.HUBBLE,
    [EndpointId.ZKCONSENSYS_MAINNET]: ChainKey.ZKCONSENSYS,
    [EndpointId.BASE_MAINNET]: ChainKey.BASE,
    [EndpointId.ZORA_MAINNET]: ChainKey.ZORA,
    [EndpointId.SOLANA_MAINNET]: ChainKey.SOLANA,
    // v2 mainnet
    [EndpointId.ETHEREUM_V2_MAINNET]: ChainKey.ETHEREUM,
    [EndpointId.BSC_V2_MAINNET]: ChainKey.BSC,
    [EndpointId.AVALANCHE_V2_MAINNET]: ChainKey.AVALANCHE,
    [EndpointId.POLYGON_V2_MAINNET]: ChainKey.POLYGON,
    [EndpointId.ARBITRUM_V2_MAINNET]: ChainKey.ARBITRUM,
    [EndpointId.OPTIMISM_V2_MAINNET]: ChainKey.OPTIMISM,
    [EndpointId.FANTOM_V2_MAINNET]: ChainKey.FANTOM,
    [EndpointId.SWIMMER_V2_MAINNET]: ChainKey.SWIMMER,
    [EndpointId.DFK_V2_MAINNET]: ChainKey.DFK,
    [EndpointId.HARMONY_V2_MAINNET]: ChainKey.HARMONY,
    [EndpointId.DEXALOT_V2_MAINNET]: ChainKey.DEXALOT,
    [EndpointId.CELO_V2_MAINNET]: ChainKey.CELO,
    [EndpointId.MOONBEAM_V2_MAINNET]: ChainKey.MOONBEAM,
    [EndpointId.INTAIN_V2_MAINNET]: ChainKey.INTAIN,
    [EndpointId.FUSE_V2_MAINNET]: ChainKey.FUSE,
    [EndpointId.GNOSIS_V2_MAINNET]: ChainKey.GNOSIS,
    [EndpointId.APTOS_V2_MAINNET]: ChainKey.APTOS,
    [EndpointId.KLAYTN_V2_MAINNET]: ChainKey.KLAYTN,
    [EndpointId.METIS_V2_MAINNET]: ChainKey.METIS,
    [EndpointId.COREDAO_V2_MAINNET]: ChainKey.COREDAO,
    [EndpointId.GOERLI_V2_MAINNET]: ChainKey.GOERLI,
    [EndpointId.OKX_V2_MAINNET]: ChainKey.OKX,
    [EndpointId.CANTO_V2_MAINNET]: ChainKey.CANTO,
    [EndpointId.ZKSYNC_V2_MAINNET]: ChainKey.ZKSYNC,
    [EndpointId.SHRAPNEL_V2_MAINNET]: ChainKey.SHRAPNEL,
    [EndpointId.DOS_V2_MAINNET]: ChainKey.DOS,
    [EndpointId.ZKPOLYGON_V2_MAINNET]: ChainKey.ZKEVM,
    [EndpointId.SEPOLIA_V2_MAINNET]: ChainKey.SEPOLIA,
    [EndpointId.MOONRIVER_V2_MAINNET]: ChainKey.MOONRIVER,
    [EndpointId.SOLANA_V2_MAINNET]: ChainKey.SOLANA,
    [EndpointId.TENET_V2_MAINNET]: ChainKey.TENET,
    [EndpointId.NOVA_V2_MAINNET]: ChainKey.NOVA,
    [EndpointId.METER_V2_MAINNET]: ChainKey.METER,
    [EndpointId.KAVA_V2_MAINNET]: ChainKey.KAVA,
    [EndpointId.MANTLE_V2_MAINNET]: ChainKey.MANTLE,
    [EndpointId.HUBBLE_V2_MAINNET]: ChainKey.HUBBLE,
    [EndpointId.ZKCONSENSYS_V2_MAINNET]: ChainKey.ZKCONSENSYS,
    [EndpointId.BASE_V2_MAINNET]: ChainKey.BASE,
    [EndpointId.ZORA_V2_MAINNET]: ChainKey.ZORA,

    // testnet
    [EndpointId.ETHEREUM_TESTNET]: ChainKey.GOERLI,
    [EndpointId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
    [EndpointId.POLYGON_TESTNET]: ChainKey.MUMBAI,
    [EndpointId.FANTOM_TESTNET]: ChainKey.FANTOM_TESTNET,
    [EndpointId.HARMONY_TESTNET]: ChainKey.HARMONY_TESTNET,
    [EndpointId.AVALANCHE_TESTNET]: ChainKey.FUJI,
    [EndpointId.ARBITRUM_TESTNET]: ChainKey.ARBITURM_GOERLI,
    [EndpointId.OPTIMISM_TESTNET]: ChainKey.OPTIMISM_GOERLI,
    [EndpointId.DFK_TESTNET]: ChainKey.DFK_TESTNET,
    [EndpointId.SWIMMER_TESTNET]: ChainKey.SWIMMER_TESTNET,
    [EndpointId.DEXALOT_TESTNET]: ChainKey.DEVALOT_TESTNET,
    [EndpointId.GNOSIS_TESTNET]: ChainKey.CHIADO,
    [EndpointId.CELO_TESTNET]: ChainKey.ALFAJORES,
    [EndpointId.APTOS_TESTNET]: ChainKey.APTOS_TESTNET,
    [EndpointId.MOONBEAM_TESTNET]: ChainKey.MOONBASE,
    [EndpointId.FUSE_TESTNET]: ChainKey.FUSESPARK,
    [EndpointId.ZKSYNC_TESTNET]: ChainKey.ZKSYNC_TESTNET,
    [EndpointId.SHRAPNEL_TESTNET]: ChainKey.SHRAPNEL_TESTNET,
    [EndpointId.DOS_TESTNET]: ChainKey.DOS_TESTNET,
    [EndpointId.KLAYTN_TESTNET]: ChainKey.KLAYTN_BAOBAB,
    [EndpointId.METIS_TESTNET]: ChainKey.METIS_GOERLI,
    [EndpointId.INTAIN_TESTNET]: ChainKey.INTAIN_TESTNET,
    [EndpointId.COREDAO_TESTNET]: ChainKey.COREDAO_TESTNET,
    [EndpointId.ZKPOLYGON_TESTNET]: ChainKey.ZKEVM_TESTNET,
    [EndpointId.OKX_TESTNET]: ChainKey.OKX_TESTNET,
    [EndpointId.SOLANA_TESTNET]: ChainKey.SOLANA_TESTNET,
    [EndpointId.METER_TESTNET]: ChainKey.METER_TESTNET,
    [EndpointId.ZKCONSENSYS_TESTNET]: ChainKey.LINEA_GOERLI,
    [EndpointId.SEPOLIA_TESTNET]: ChainKey.SEPOLIA,
    [EndpointId.BASE_TESTNET]: ChainKey.BASE_GOERLI,
    [EndpointId.AAVEGOTCHI_TESTNET]: ChainKey.AAVEGOTCHI_TESTNET,
    [EndpointId.SCROLL_TESTNET]: ChainKey.SCROLL_TESTNET,
    [EndpointId.CATHAY_TESTNET]: ChainKey.CATHAY_TESTNET,
    [EndpointId.KAVA_TESTNET]: ChainKey.KAVA_TESTNET,
    [EndpointId.TENET_TESTNET]: ChainKey.TENET_TESTNET,
    [EndpointId.CANTO_TESTNET]: ChainKey.CANTO_TESTNET,
    [EndpointId.ORDERLY_TESTNET]: ChainKey.ORDERLY_TESTNET,
    [EndpointId.BLOCKGEN_TESTNET]: ChainKey.BLOCKGEN_TESTNET,
    [EndpointId.MERITCIRCLE_TESTNET]: ChainKey.MERITCIRCLE_TESTNET,
    [EndpointId.MANTLE_TESTNET]: ChainKey.MANTLE_TESTNET,
    [EndpointId.HUBBLE_TESTNET]: ChainKey.HUBBLE_TESTNET,
    [EndpointId.ZORA_TESTNET]: ChainKey.ZORA_TESTNET,
    // v2 testnet
    [EndpointId.ETHEREUM_V2_TESTNET]: ChainKey.GOERLI,
    [EndpointId.POLYGON_V2_TESTNET]: ChainKey.MUMBAI,
    [EndpointId.SOLANA_V2_TESTNET]: ChainKey.SOLANA_TESTNET,
    [EndpointId.ARBITRUM_V2_TESTNET]: ChainKey.ARBITURM_GOERLI,
    [EndpointId.OPTIMISM_V2_TESTNET]: ChainKey.OPTIMISM_GOERLI,
    [EndpointId.AVALANCHE_V2_TESTNET]: ChainKey.FUJI,

    [EndpointId.BSC_V2_TESTNET]: ChainKey.BSC_TESTNET,
    [EndpointId.FANTOM_V2_TESTNET]: ChainKey.FANTOM_TESTNET,
    [EndpointId.DFK_V2_TESTNET]: ChainKey.DFK_TESTNET,
    [EndpointId.HARMONY_V2_TESTNET]: ChainKey.HARMONY_TESTNET,
    [EndpointId.DEXALOT_V2_TESTNET]: ChainKey.DEVALOT_TESTNET,
    [EndpointId.CELO_V2_TESTNET]: ChainKey.ALFAJORES,
    [EndpointId.MOONBEAM_V2_TESTNET]: ChainKey.MOONBASE,
    [EndpointId.FUSE_V2_TESTNET]: ChainKey.FUSESPARK,
    [EndpointId.GNOSIS_V2_TESTNET]: ChainKey.CHIADO,
    [EndpointId.ZKSYNC_V2_TESTNET]: ChainKey.ZKSYNC_TESTNET,
    [EndpointId.SHRAPNEL_V2_TESTNET]: ChainKey.SHRAPNEL_TESTNET,
    [EndpointId.DOS_V2_TESTNET]: ChainKey.DOS_TESTNET,
    [EndpointId.KLAYTN_V2_TESTNET]: ChainKey.KLAYTN_BAOBAB,
    [EndpointId.METIS_V2_TESTNET]: ChainKey.METIS_GOERLI,
    [EndpointId.COREDAO_V2_TESTNET]: ChainKey.COREDAO_TESTNET,
    [EndpointId.OKX_V2_TESTNET]: ChainKey.OKX_TESTNET,
    [EndpointId.METER_V2_TESTNET]: ChainKey.METER_TESTNET,
    [EndpointId.ZKCONSENSYS_V2_TESTNET]: ChainKey.LINEA_GOERLI,
    [EndpointId.ZKPOLYGON_V2_TESTNET]: ChainKey.ZKEVM_TESTNET,
    [EndpointId.CANTO_V2_TESTNET]: ChainKey.CANTO_TESTNET,
    [EndpointId.BASE_V2_TESTNET]: ChainKey.BASE_GOERLI,
    [EndpointId.SEPOLIA_V2_TESTNET]: ChainKey.SEPOLIA,
    [EndpointId.AAVEGOTCHI_V2_TESTNET]: ChainKey.AAVEGOTCHI_TESTNET,
    [EndpointId.SCROLL_V2_TESTNET]: ChainKey.SCROLL_TESTNET,
    [EndpointId.CATHAY_V2_TESTNET]: ChainKey.CATHAY_TESTNET,
    [EndpointId.KAVA_V2_TESTNET]: ChainKey.KAVA_TESTNET,
    [EndpointId.TENET_V2_TESTNET]: ChainKey.TENET_TESTNET,
    [EndpointId.ORDERLY_V2_TESTNET]: ChainKey.ORDERLY_TESTNET,
    [EndpointId.BLOCKGEN_V2_TESTNET]: ChainKey.BLOCKGEN_TESTNET,
    [EndpointId.MERITCIRCLE_V2_TESTNET]: ChainKey.MERITCIRCLE_TESTNET,
    [EndpointId.MANTLE_V2_TESTNET]: ChainKey.MANTLE_TESTNET,
    [EndpointId.HUBBLE_V2_TESTNET]: ChainKey.HUBBLE_TESTNET,
    [EndpointId.ZORA_V2_TESTNET]: ChainKey.ZORA_TESTNET,
    // sandbox
    [EndpointId.ETHEREUM_SANDBOX]: ChainKey.GOERLI,
    [EndpointId.BSC_SANDBOX]: ChainKey.BSC_TESTNET,
    [EndpointId.POLYGON_SANDBOX]: ChainKey.MUMBAI,
    [EndpointId.AVALANCHE_SANDBOX]: ChainKey.FUJI,
    [EndpointId.APTOS_SANDBOX]: ChainKey.APTOS,
    // v2 sandbox
    [EndpointId.ETHEREUM_V2_SANDBOX]: ChainKey.GOERLI,
    [EndpointId.POLYGON_V2_SANDBOX]: ChainKey.MUMBAI,
    [EndpointId.SOLANA_V2_SANDBOX]: ChainKey.SOLANA_TESTNET,
    [EndpointId.BSC_V2_SANDBOX]: ChainKey.BSC_TESTNET,
    [EndpointId.AVALANCHE_V2_SANDBOX]: ChainKey.FUJI,
}
