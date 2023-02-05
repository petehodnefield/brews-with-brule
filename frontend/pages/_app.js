import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://bwb-api.onrender.com/graphql',
    cache: new InMemoryCache(),
  });
  return (
        <ApolloProvider client={client}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
          </ApolloProvider>

  )
}
