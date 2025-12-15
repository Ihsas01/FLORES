import { useInView } from 'framer-motion'
import { useRef, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import withBase from '../utils/assetPath'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [query, setQuery] = useState('')

  const products = [
    // Products from 3rd image (8 products)
    {
      name: 'ULTRAFRESH',
      fullName: 'Ultra Fresh LAUNDRY WASH 2L',
      price: 'Rs 1,150.00 - Rs 3,250.00',
      image: withBase('images/products/2L-UltraFresh.png'),
      buttonText: 'Order Now',
      badge: 'Bestseller',
    },
    {
      name: 'ABAYA WASH',
      fullName: 'Flores Abaya Wash',
      price: 'Rs 650.00 - Rs 2,900.00',
      image: withBase('images/products/Abaya-Wash-2L-.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'BABY LAUNDRY WASH',
      fullName: 'Flores Baby Laundry Wash',
      price: 'Rs 650.00 - Rs 2,900.00',
      image: withBase('images/products/Baby-Laundry-2L.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'HAND WASH',
      fullName: 'Flores Hand Wash',
      price: 'Rs 400.00 - Rs 2,750.00',
      image: withBase('images/products/Hand-Wash-2L-Rose.png'),
      buttonText: 'Order Now',
      badge: 'New',
    },
    {
      name: 'DISH WASH',
      fullName: 'Flores Dish Wash',
      price: 'Rs 425.00 - Rs 3,000.00',
      image: withBase('images/products/Dish-Wash-2LL.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'BABY DISH WASH',
      fullName: 'Flores Baby Dish Wash',
      price: 'Rs 450.00 - Rs 2,750.00',
      image: withBase('images/products/Baby-Dish-Wash-2L.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'TILE CLEANER',
      fullName: 'Flores Tile Cleaner',
      price: 'Rs 400.00 - Rs 2,500.00',
      image: withBase('images/products/Tile-Cleaner-2L.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'TOILET CLEANER',
      fullName: 'Flores Toilet Cleaner',
      price: 'Rs 500.00 - Rs 2,500.00',
      image: withBase('images/products/Toilet-Cleaner-2L.png'),
      buttonText: 'Order Now',
    },
    // Products from 2nd image (4 products)
    {
      name: 'AIR FRESHENER',
      fullName: 'AIR FRESHENER LAVENDER 500 ML',
      price: 'Rs 875.00',
      image: withBase('images/products/Air-Freshener-Lavender.png'),
      buttonText: 'Order Now',
    },
    {
      name: 'ALL PURPOSE CLEANER',
      fullName: 'ALL PURPOSE CLEANER LEMONGRASS 500ML',
      price: 'Rs 450.00',
      image: withBase('images/products/all-purpose.png'),
      buttonText: 'Add to cart',
    },
    {
      name: 'CAR DIFFUSER',
      fullName: 'Car Diffuser',
      price: 'Rs 1,200.00 - Rs 1,500.00',
      image: withBase('images/products/Car Diffuser.png'),
      buttonText: 'Order Now',
      badge: 'Premium',
    },
    {
      name: 'PET SHAMPOO',
      fullName: 'Soft & Comfortable Pet Shampoo French lavender 500 ML',
      price: 'Rs 750.00',
      image: withBase('images/products/Pet-Shampo.png'),
      buttonText: 'Add to cart',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.fullName.toLowerCase().includes(q)
    )
  }, [products, query])

  return (
    <section id="products" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-eco-green">Products</span>
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium eco-friendly cleaning products
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products (e.g., hand wash, baby, tile)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-white/90 backdrop-blur border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="relative h-56 md:h-60 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
                {/* Order Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {product.badge ?? 'Order'}
                  </div>
                </div>
                
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.fullName}
                  className="w-full h-full object-contain p-4 md:p-5 transition-transform duration-500 group-hover:scale-104"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.src = 'https://via.placeholder.com/300x300?text=Flores+Product'
                  }}
                  loading="lazy"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-eco-dark bg-eco-green/10 px-3 py-1 rounded-full">
                    Eco
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{product.fullName}</p>
                <p className="text-lg font-semibold text-eco-green">{product.price}</p>
                
                {/* Order Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full button-primary px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md"
                >
                  <FaShoppingCart />
                  {product.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center text-gray-600">
              No products match “{query}”.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase

