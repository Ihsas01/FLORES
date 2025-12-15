import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Flores logo"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-3xl font-bold italic text-eco-White">Flores</span>

            </div>
            <p className="text-sm leading-relaxed">
              Premium eco-friendly cleaning products for domestic and industrial markets. 
              Gentle on skin, tough on dirt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-eco-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-eco-green transition-colors">About</a>
              </li>
              <li>
                <a href="#products" className="hover:text-eco-green transition-colors">Products</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-eco-green transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-eco-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaPhone className="text-eco-green mt-1 flex-shrink-0" />
                <a href="tel:+94741197737" className="hover:text-eco-green transition-colors">
                  +94 74 119 77 37
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-eco-green mt-1 flex-shrink-0" />
                <a href="mailto:flores@eholdings.lk" className="hover:text-eco-green transition-colors break-all">
                  flores@eholdings.lk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-eco-green mt-1 flex-shrink-0" />
                <span>
                  638, Highlevel Road,<br />
                  Gangodawila, Nugegoda 10250
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 p-3 rounded-full hover:bg-eco-green transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Flores - A Strategic Business Unit of E-Screen Systems. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

