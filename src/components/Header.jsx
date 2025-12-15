import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronRight } from 'react-icons/fa'
import withBase from '../utils/assetPath'

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const productCategories = [
    { name: 'Cleaning Products', href: '#products', filter: 'cleaning' },
    { name: 'Laundry Products', href: '#products', filter: 'laundry' },
    { name: 'Air Care Products', href: '#products', filter: 'aircare' },
    { name: 'Pet Care Products', href: '#products', filter: 'petcare' },
  ]

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

 const linkColor = 'text-white hover:text-eco-green font-semibold italic';
const logoTextColor = 'text-white font-semibold italic';


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('#home')}
          aria-label="Go to home"
        >
          <img
            src={withBase('images/logo.png')}
            alt="Flores logo"
            className="h-10 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className={`text-3xl font-bold italic ${logoTextColor}`}>Flores</span>
        </motion.button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.name === 'Products' ? (
                <div
                  ref={dropdownRef}
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  className="relative"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`${linkColor} transition-colors font-medium`}
                  >
                    {link.name}
                  </motion.button>
                  
                  {/* Products Dropdown */}
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden z-50"
                      >
                        {/* Header */}
                        <div className="bg-black text-white px-4 py-3 flex items-center gap-3">
                          <FaBars className="text-sm" />
                          <span className="font-bold text-sm uppercase tracking-wide">
                            Browse Categories
                          </span>
                        </div>
                        
                        {/* Categories List */}
                        <ul className="divide-y divide-gray-200">
                          {productCategories.map((category, index) => (
                            <li key={index}>
                              <motion.button
                                whileHover={{ backgroundColor: '#f3f4f6', x: 5 }}
                                onClick={() => {
                                  scrollToSection(category.href)
                                  setIsProductsDropdownOpen(false)
                                }}
                                className="w-full px-4 py-3 flex items-center justify-between text-left text-gray-700 hover:text-eco-green transition-colors group"
                              >
                                <span className="font-medium">{category.name}</span>
                                <FaChevronRight className="text-gray-400 group-hover:text-eco-green transition-colors" />
                              </motion.button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`${linkColor} transition-colors font-medium`}
                >
                  {link.name}
                </motion.button>
              )}
            </li>
          ))}
          <li>
            <motion.button
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-eco-green/10 text-eco-green hover:bg-eco-green/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-eco-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.name === 'Products' ? (
                  <div>
                    <button
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="text-gray-700 hover:text-eco-green transition-colors font-medium w-full text-left flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <FaChevronRight 
                        className={`transition-transform ${isProductsDropdownOpen ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {isProductsDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2 border-l-2 border-eco-green/20 pl-4"
                      >
                        {productCategories.map((category, index) => (
                          <li key={index}>
                            <button
                              onClick={() => {
                                scrollToSection(category.href)
                                setIsProductsDropdownOpen(false)
                                setIsMobileMenuOpen(false)
                              }}
                              className="text-gray-600 hover:text-eco-green transition-colors text-sm w-full text-left flex items-center justify-between"
                            >
                              <span>{category.name}</span>
                              <FaChevronRight className="text-xs" />
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-eco-green transition-colors font-medium w-full text-left"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center gap-2 text-gray-700 hover:text-eco-green transition-colors font-medium"
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
                <span>Toggle Theme</span>
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

