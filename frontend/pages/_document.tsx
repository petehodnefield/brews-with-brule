import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'

export default function Document() {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <Html lang="en">

      <Head />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <body>
        <Main />
        <NextScript />
        <h1></h1>
      </body>
      <Footer />
    </Html>
  )
}
