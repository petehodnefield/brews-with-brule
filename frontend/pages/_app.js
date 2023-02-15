import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { useApollo } from '../lib/apollo';




export default function App({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState)
  
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}
