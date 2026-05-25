import { FiShield, FiTruck, FiHeart, FiSmile } from 'react-icons/fi'
import heroImage from '../assets/hero.png'
import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <div className="w-full min-h-screen bg-primaryBg text-primaryText transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="About Us Hero" className="w-full h-full object-cover object-center filter brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primaryBg/10 to-primaryBg opacity-95"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="uppercase tracking-[0.35em] text-sm text-greenish font-semibold mb-4">Built for every shopper</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Your favorite store for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">everyday essentials</span>
          </h1>
          <p className="text-base md:text-lg text-dark/40 max-w-3xl mx-auto font-light leading-8">
            We connect customers with premium products, fast delivery, and a shopping experience designed for modern lifestyles.
          </p>
        </div>
      </div>

      {/* Featured Values */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mx-auto max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-greenish font-bold mb-3">Why choose us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primaryText">Fast, reliable and designed with your needs in mind.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="rounded-[28px] border border-cardBorder bg-cardBg/80 shadow-sm p-8 text-center hover:-translate-y-1 transition-transform duration-200">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-greenish/10 text-greenish text-2xl">
              <FiTruck />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
            <p className="text-sm text-primaryText/70 leading-relaxed">Quick delivery across the country with secure packaging and trusted carriers.</p>
          </div>

          <div className="rounded-[28px] border border-cardBorder bg-cardBg/80 shadow-sm p-8 text-center hover:-translate-y-1 transition-transform duration-200">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 text-2xl">
              <FiShield />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Checkout</h3>
            <p className="text-sm text-primaryText/70 leading-relaxed">All transactions are protected so you can shop with confidence every time.</p>
          </div>

          <div className="rounded-[28px] border border-cardBorder bg-cardBg/80 shadow-sm p-8 text-center hover:-translate-y-1 transition-transform duration-200">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-500 text-2xl">
              <FiHeart />
            </div>
            <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
            <p className="text-sm text-primaryText/70 leading-relaxed">Handpicked products that combine style, value, and everyday usability.</p>
          </div>

          <div className="rounded-[28px] border border-cardBorder bg-cardBg/80 shadow-sm p-8 text-center hover:-translate-y-1 transition-transform duration-200">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 text-2xl">
              <FiSmile />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Delight</h3>
            <p className="text-sm text-primaryText/70 leading-relaxed">Personalized care, fast support, and a shopping experience made to impress.</p>
          </div>
        </div>
      </section>

      {/* Mission + Stats Section */}
      <section className="bg-cardBg border-t border-cardBorder py-16">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <p className="text-greenish uppercase tracking-[0.35em] font-semibold">Our mission</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built on trust, quality, and a better way to shop.</h2>
            <p className="text-base text-primaryText/75 leading-8">
              Our mission is to create a seamless marketplace where premium products meet practical prices. Through a strong focus on quality, transparency, and customer satisfaction, we make shopping intuitive, inspiring, and delightful.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-cardBorder bg-cardBg/80 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-primaryText/50 mb-3">Premium Quality</p>
                <p className="text-primaryText/80 leading-relaxed">Products reviewed by our team and selected for durability, performance, and design.</p>
              </div>
              <div className="rounded-3xl border border-cardBorder bg-cardBg/80 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-primaryText/50 mb-3">Better Accessibility</p>
                <p className="text-primaryText/80 leading-relaxed">A clean, modern shopping experience that works on every device and every budget.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[28px] bg-cardBg/80 shadow-sm border border-cardBorder p-8 flex flex-col items-start gap-4">
              <span className="px-4 py-2 rounded-full bg-greenish/10 text-greenish text-sm font-semibold uppercase">Trusted by customers</span>
              <h3 className="text-3xl font-bold">50k+</h3>
              <p className="text-primaryText/75 leading-relaxed">Countless shoppers trust our store for fast delivery and top-notch customer care.</p>
            </div>
            <div className="rounded-[28px] bg-cardBg/80 shadow-sm border border-cardBorder p-8 flex flex-col items-start gap-4">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold uppercase">Quality first</span>
              <h3 className="text-3xl font-bold">Top rated products</h3>
              <p className="text-primaryText/75 leading-relaxed">We select merchandise carefully, giving you only the best in every category.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About