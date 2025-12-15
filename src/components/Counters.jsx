import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaBox, FaSmile, FaAward, FaCertificate } from 'react-icons/fa'

const Counters = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const metrics = [
    {
      icon: FaBox,
      end: 50000,
      suffix: '+',
      label: 'Products Sold',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: FaSmile,
      end: 10000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: FaAward,
      end: 10,
      suffix: '+',
      label: 'Years of Experience',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: FaCertificate,
      end: 5,
      suffix: '+',
      label: 'Eco-Friendly Certifications',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-eco-green to-eco-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`${metric.bgColor} ${metric.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon size={40} />
                </div>
                {isInView && (
                  <div className="text-5xl font-bold mb-2">
                    <CountUp
                      end={metric.end}
                      duration={2.5}
                      suffix={metric.suffix}
                    />
                  </div>
                )}
                <div className="text-xl font-semibold">{metric.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Counters

