export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY; // covalent api key
export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key

export const APP_NAME = "Polysign";
export const APP_DESC = "Polygon-backed esignature requests";

export const CHAIN_OPTIONS = {
  80001: {
    name: "Mumbai",
    url: "https://mumbai.polygonscan.com/",
    id: 80001,
  },
  137: {
    name: "Matic Mainnet",
    url: "https://polygonscan.com/",
    id: 137,
  },
};

export const CHAIN_IDS = Object.keys(CHAIN_OPTIONS)


// 1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
// 42: { name: "kovan", url: "https://kovan.etherscan.io/tx/", id: 42 },
// 4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },

export const ACTIVE_CHAIN = CHAIN_OPTIONS["80001"];

export const EXAMPLE_FORM = {
  title: "Condo agreement",
  description: "Please agree to the included condo agreement documents",
  signerAddress: "0xD7e02fB8A60E78071D69ded9Eb1b89E372EE2292",
  files: [],
};

export const USE_SEQUENCE = process.env.REACT_APP_USE_SEQUENCE || false;

export const IPFS_BASE_URL = "https://ipfs.io/ipfs"

console.log("config", COVALENT_KEY, NFT_PORT_KEY, ACTIVE_CHAIN);
