import { Helmet } from 'react-helmet-async'
import AppBar from './components/AppBar'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import HowToOrder from './components/HowToOrder'
import Footer from './components/Footer'
import { COMPANY_INFO } from './data/content'

function App() {
  return (
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
      <Footer />
    </div>
  )
}

export default App