import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaHandSparkles, FaTshirt, FaUtensils, FaBaby, FaSprayCan, FaIndustry } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = [
    { icon: FaHandSparkles, title: 'Hand Washes', color: 'bg-blue-100 text-blue-600' },
    { icon: FaTshirt, title: 'Laundry Detergents', color: 'bg-purple-100 text-purple-600' },
    { icon: FaTshirt, title: 'Abaya Wash', color: 'bg-pink-100 text-pink-600' },
    { icon: FaBaby, title: 'Baby Laundry Wash', color: 'bg-yellow-100 text-yellow-600' },
    { icon: FaUtensils, title: 'Dish Wash', color: 'bg-green-100 text-green-600' },
    { icon: FaBaby, title: 'Baby Dish Wash', color: 'bg-orange-100 text-orange-600' },
    { icon: FaSprayCan, title: 'Air Fresheners', color: 'bg-indigo-100 text-indigo-600' },
    { icon: FaIndustry, title: 'Industrial Detergents', color: 'bg-gray-100 text-gray-600' },
    { icon: FaSprayCan, title: 'Tile & Toilet Cleaners', color: 'bg-teal-100 text-teal-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-eco-green">Flores</span>
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Flores, being a strategic business unit of <strong>E-Screen Systems</strong>, caters premium quality Eco-Friendly products for domestic and industrial markets. Our products include floral scented Hand washes, Laundry detergents, Abaya wash, Baby Laundry wash, Dish wash, Baby Dish Wash, Air fresheners, Industrial Garment detergents, as well as tile and toilet cleaners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center mt-4">
            We use <strong>eco-friendly ingredients</strong> and <strong>ITI approved recipes</strong> to develop high-quality, affordable products, which offer deep cleaning power. Our products are gentle to skin and fabric, have a <strong>high TFM value</strong> and <strong>long-lasting scent</strong>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-center font-semibold text-gray-800">{category.title}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About

