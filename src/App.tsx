import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import HowItWorksSection from './components/HowItWorksSection'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'
import GallerySection from './components/GallerySection'
import OrderSection from './components/OrderSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
        <HowItWorksSection />
        <VideoSection />
        <GallerySection />
        <OrderSection />
      </main>
      <Footer />
    </>
  )
}

export default App
