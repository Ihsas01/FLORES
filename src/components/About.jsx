import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-light/60 text-eco-dark text-sm font-semibold">
            About Flores
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Premium eco-friendly care for homes and industries
          </h2>
          <div className="h-1 w-24 bg-eco-green mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
            Flores, a strategic business unit of <strong>E-Screen Systems</strong>, crafts
            premium eco-friendly products for both domestic and industrial needs. We offer floral
            scented hand washes, laundry detergents, Abaya wash, baby laundry wash, dish wash,
            baby dish wash, air fresheners, industrial garment detergents, plus tile and toilet
            cleaners.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
            Using eco-friendly ingredients and <strong>ITI approved recipes</strong>, we deliver
            deep cleaning power that remains gentle on skin and fabric—with high TFM value and a
            long-lasting scent, all at an affordable price point.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

