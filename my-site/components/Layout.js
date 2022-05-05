import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
    return (
        <>
          <Head>
            <title>Sujeewa Sandeepa</title>
            <meta name="description" content="Personal website of Sujeewa Sandeepa"></meta>
          </Head>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </>
    )
}

export default Layout