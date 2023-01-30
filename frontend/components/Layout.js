import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Head from 'next/head'


export default function Layout({ children }) {
    return (
        <div className="h-screen">  
            <Head>
                <title></title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <div className="relative h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
      </div>
      
    )
  }