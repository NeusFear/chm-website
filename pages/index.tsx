import type { NextPage } from 'next'
import Head from 'next/head'
import AboutSection from '../components/page/AboutSection'
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
        <title>Country Home Meats Co</title>
        <meta name="description" content="Homepage of the Country Home Meats Company" />
      </Head>

      <main className="overflow-x-hidden">
        <Navbar />
        <WelcomeBanner />
        <AboutSection />
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
