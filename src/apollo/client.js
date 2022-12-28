import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const linkNodeGraph = process.env.REACT_APP_LINK_GRAPH_NODE
const linkNodeGraphBlock = process.env.REACT_APP_LINK_GRAPH_NODE_BLOCK
const linkHealthClient = process.env.REACT_APP_LINK_HEALTH_CLIENT

export const client = new ApolloClient({
  link: new HttpLink({
    uri: linkNodeGraph,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: linkHealthClient,
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

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: linkNodeGraphBlock,
  }),
  cache: new InMemoryCache(),
})
