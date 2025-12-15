import { motion } from 'framer-motion'

const orbs = [
  { size: 320, x: '-10%', y: '10%', color: 'from-eco-green/25 to-eco-accent/20', delay: 0 },
  { size: 260, x: '70%', y: '30%', color: 'from-eco-accent/18 to-eco-light/12', delay: 1.5 },
  { size: 200, x: '20%', y: '70%', color: 'from-eco-light/18 to-eco-green/12', delay: 0.8 },
]

const AnimatedOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
      {orbs.map((orb, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.32, scale: 0.95 }}
          animate={{
            opacity: [0.2, 0.34, 0.24],
            scale: [0.95, 1.08, 0.98],
            rotate: [0, 14, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedOrbs

