import { Helmet } from 'react-helmet-async'
import { LazyMotion, domAnimation } from 'framer-motion'
import AppBar from './components/AppBar'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import HowToOrder from './components/HowToOrder'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import { COMPANY_INFO } from './data/content'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <SmoothScroll>
        <div className="min-h-screen bg-slate-950 text-white">
          <Helmet>
            <title>{COMPANY_INFO.name} - {COMPANY_INFO.subtitle}</title>
            <meta name="description" content={COMPANY_INFO.subtitle} />
            <meta property="og:title" content={COMPANY_INFO.name} />
            <meta property="og:description" content={COMPANY_INFO.subtitle} />
            <meta property="og:image" content={COMPANY_INFO.logo} />
          </Helmet>
          <AppBar />
          <Hero />
          <Advantages />
          <HowToOrder />
          <FAQ />
          <Footer />
          <ScrollToTop />
        </div>
      </SmoothScroll>
    </LazyMotion>
  )
}

export default App