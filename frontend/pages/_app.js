import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'



export default function App({ Component, pageProps }) {

  const httpLink = createHttpLink({
    uri: 'https://bwb-api.onrender.com/graphql',
  })


  const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('id_token')
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link:  authLink.concat(httpLink),
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
