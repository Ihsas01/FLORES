import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      quote: 'Flores products have transformed my cleaning routine. They\'re effective, smell amazing, and I feel good knowing they\'re eco-friendly!',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      quote: 'We use Flores industrial detergents in our facility. Excellent cleaning power and our employees appreciate the gentle formula.',
    },
    {
      name: 'Emma Williams',
      role: 'Mother of Two',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      quote: 'The baby laundry wash is a lifesaver! It\'s gentle on my children\'s sensitive skin and removes tough stains effortlessly.',
    },
    {
      name: 'David Brown',
      role: 'Restaurant Manager',
      image: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      quote: 'Flores dish wash is our go-to. It cuts through grease like nothing else while being safe for our staff\'s hands.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Eco-Conscious Consumer',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      quote: 'Finally, a brand that combines effectiveness with environmental responsibility. Flores products are now a staple in our home.',
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-eco-green">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
        </motion.div>

        {isInView && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-card rounded-2xl p-8 shadow-lg h-full flex flex-col"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials

