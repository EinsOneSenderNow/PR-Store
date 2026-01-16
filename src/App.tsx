import AppBar from './components/AppBar'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import HowToOrder from './components/HowToOrder'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <AppBar />
      <Hero />
      <Advantages />
      <HowToOrder />
      <Footer />
    </div>
  )
}

export default App