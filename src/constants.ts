// Environments
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

// Git
export const GIT_COMMIT_SHA = process.env.GIT_COMMIT_SHA?.slice(0, 7)
export const GIT_COMMIT_REF = process.env.GIT_COMMIT_REF

// Messages
export const ERROR_MESSAGE = 'Something went wrong!'
export const CONNECT_WALLET = 'Please connect your wallet.'
export const WRONG_NETWORK = 'Please change network to Polygon Mumbai Testnet.'

// URLs
export const STATIC_ASSETS = 'https://assets.lenster.xyz/images'
export const API_URL = 'https://api-mumbai.lens.dev'

// Web3
export const INFURA_ID = '3d19324a72854976a7160e0e2ebc9c2b'

// Addresses
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const LENSHUB_PROXY = '0xd7B3481De00995046C7850bCe9a5196B7605c367'
export const REVERT_COLLECT_MODULE =
  '0x98dfAB2360352D9Da122b5F43a4a4fa5D3Ce25a3'
export const WMATIC_TOKEN = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
