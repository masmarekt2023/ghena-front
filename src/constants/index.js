export const NetworkContextName = import.meta.env.VITE_NETWORK_CONTEXT_NAME;
export const ACTIVE_NETWORK = import.meta.env.VITE_ACTIVE_NETWORK;
export const BNB_NETWORK = import.meta.env.VITE_BNB_NETWORK;
export const OpenMarketplace = import.meta.env.VITE_OPEN_MARKETPLACE;
export const NFTTokenContract = import.meta.env.VITE_NFT_TOKEN_CONTRACT;
export const deadAddress = import.meta.env.VITE_DEAD_ADDRESS;
export const masToken = import.meta.env.VITE_MAS_TOKEN;
// export const USDTToken = '0xdac17f958d2ee523a2206206994597c13d831ec7'
export const USDTToken = import.meta.env.VITE_USDT_TOKEN;
export const WBTCToken = import.meta.env.VITE_WBTC_TOKEN;
export const FDUSDToken = import.meta.env.VITE_FDUSD_TOKEN;
export const CEO_NAME = import.meta.env.VITE_CEO_NAME;
export const websiteName =
  window.location.protocol + "//" + window.location.host;
export const RPC_URL = import.meta.env.VITE_RPC_URL;

export const tokensDetails = [
  {
    name: "MAS",
    chainId: import.meta.env.VITE_ACTIVE_NETWORK,
    tokenAddress: masToken,
    networkName: "Binance Smart Chain Mainnet",
    databaseKey: "masBalance",
    img: "images/tokens/1.png",
  },
  {
    name: "FDUSD",
    chainId: import.meta.env.VITE_ACTIVE_NETWORK,
    tokenAddress: FDUSDToken,
    networkName: "Binance Smart Chain Mainnet",
    databaseKey: "fdusdBalance",
    img: "images/tokens/6.png",
  },
  {
    name: "USDT",
    chainId: import.meta.env.VITE_ACTIVE_NETWORK,
    tokenAddress: USDTToken,
    networkName: "Binance Smart Chain Mainnet",
    databaseKey: "usdtBalance",
    img: "images/tokens/3.png",
  },
];
export const getCoinkDetails = (name) => {
  switch (name.toString()) {
    case "MAS":
      return {
        name: "MAS",
        chainId: import.meta.env.VITE_ACTIVE_NETWORK,
        tokenAddress: masToken,
        networkName: "Binance Smart Chain Mainnet",
        databaseKey: "masBalance",
        img: "images/tokens/1.png",
      };
    case "FDUSD":
      return {
        name: "FDUSD",
        chainId: import.meta.env.VITE_ACTIVE_NETWORK,
        tokenAddress: FDUSDToken,
        networkName: "Binance Smart Chain Mainnet",
        databaseKey: "fdusdBalance",
        img: "images/tokens/6.png",
      };
    case "USDT":
      return {
        name: "USDT",
        chainId: import.meta.env.VITE_ACTIVE_NETWORK,
        tokenAddress: USDTToken,
        networkName: "Binance Smart Chain Mainnet",
        databaseKey: "usdtBalance",
        img: "images/tokens/3.png",
      };
  }
};
