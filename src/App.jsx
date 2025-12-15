import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProductShowcase from './components/ProductShowcase'
import Counters from './components/Counters'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ChatWidget from './components/ChatWidget'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <Helmet>
        <title>Flores – Premium Eco-Friendly Cleaning Products</title>
        <meta 
          name="description" 
          content="Flores offers premium eco-friendly cleaning and household products including hand washes, laundry detergents, dish wash, air fresheners, and industrial cleaners. ITI approved recipes with deep cleaning power." 
        />
        <meta property="og:title" content="Flores – Premium Eco-Friendly Cleaning Products" />
        <meta property="og:description" content="Premium eco-friendly cleaning products for domestic and industrial markets. Gentle on skin and fabric with high TFM value and long-lasting scent." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://flores.eholdings.lk" />
      </Helmet>
      
      <div className={isDarkMode ? 'dark' : ''}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
        <About />
        <ProductShowcase />
        <Counters />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </div>
    </>
  )
}

export default App

