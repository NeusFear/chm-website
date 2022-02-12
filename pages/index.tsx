import type { NextPage } from 'next'
import Head from 'next/head'
import CustomSlaughterSection from '../components/page/CustomSlaughterSection'
import Footer from '../components/page/Footer'
import MapSection from '../components/page/MapSection'
import PricesSection from '../components/page/PricesSection'
import QASection from '../components/page/QASection'
import WelcomeBanner from '../components/page/WelcomeBanner'
import Navbar from '../components/utility/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Country Home Meats</title>
        <meta name="description" content="Country Home Meats Homepage" />
      </Head>

      <main className="overflow-x-hidden">
        <Navbar />
        <WelcomeBanner />
        {/*<AboutSection />*/}
        <PricesSection />
        <CustomSlaughterSection />
        <QASection />
        <MapSection />
      </main>

      <Footer />
    </>
  )
}

export default Home
