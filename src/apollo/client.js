import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

//https://api.mochiswap.io/subgraphs/name/mochiswap/mochiswap1
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.mochiswap.io/subgraphs/name/mochiswap/mochiswap1',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})


export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.viper.exchange/subgraphs/name/venomprotocol/venomswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

//https://api.mochiswap.io/subgraphs/name/mochiswap/blocks
export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.mochiswap.io/subgraphs/name/mochiswap/blocks',
  }),
  cache: new InMemoryCache(),
})
