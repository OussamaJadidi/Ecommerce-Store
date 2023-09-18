import Head from 'next/head'
import Navbar from './Navbar'
import { Footer } from '.';

export default function Layout(props) {
  return (
    <div className="layout">
      <Head>
        <title>
          Ecommerce Store
        </title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
