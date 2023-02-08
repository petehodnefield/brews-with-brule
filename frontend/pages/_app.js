import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import { useApollo } from '../lib/apollo';



export default function App({ Component, pageProps }) {

  // const httpLink = createHttpLink({
  //   uri: 'https://bwb-api.onrender.com/graphql',
  // })


  // const authLink = setContext((_, {headers}) => {
  //   const token = localStorage.getItem('id_token')
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   }
  // })

  // const client = new ApolloClient({
  //   ssrMode: typeof window === 'undefined',
  //   link:  authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // });
  const apolloClient = useApollo(pageProps.initialApolloState)
  
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}
