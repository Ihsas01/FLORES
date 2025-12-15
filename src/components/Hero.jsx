import { motion } from 'framer-motion'
import { FaShoppingBag, FaEnvelope } from 'react-icons/fa'
import withBase from '../utils/assetPath'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 filter blur-sm"
          style={{
            backgroundImage: `url('${withBase('images/flores-hero-bg.jpg')}')`,
          }}
        />
        {/* Fallback gradient background - shows behind image or if image fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-eco-light/10 to-eco-accent/20 animate-gradient bg-[length:200%_200%]"></div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        {/* Additional overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-eco-light/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-block mb-6"
            aria-hidden="true"
          >
            <span className="text-6xl drop-shadow-lg" role="img" aria-label="Eco-friendly leaf">🌿</span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg"
        >
          Premium{' '}
          <span className="text-eco-green">Eco-Friendly</span>
          <br />
          Cleaning Products
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-balance drop-shadow-md"
        >
          Gentle on skin and fabric. Deep cleaning power. Long-lasting scent.
          <br />
          <span className="text-eco-green font-semibold">
            ITI approved recipes with high TFM value
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#products')}
            className="button-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
          >
            <FaShoppingBag />
            Shop Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-eco-green px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg border-2 border-eco-green hover:bg-eco-green/5 transition-all"
          >
            <FaEnvelope />
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-eco-green rounded-full z-10"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.button>
    </section>
  )
}

export default Hero

