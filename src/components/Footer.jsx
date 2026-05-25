import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cardBg border-t border-cardBorder pt-16 pb-8 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 inline-block">
              E-Commerce
            </Link>
            <p className="text-primaryText/70 text-sm leading-relaxed">
              Elevating your digital lifestyle with premium products. We focus on quality, innovation, and an unparalleled shopping experience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-primaryText/50 hover:text-blue-500 transition-colors hover-lift">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-primaryText/50 hover:text-blue-400 transition-colors hover-lift">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-primaryText/50 hover:text-pink-500 transition-colors hover-lift">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-primaryText/50 hover:text-primaryText transition-colors hover-lift">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primaryText">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primaryText/70 hover:text-greenish transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-greenish mr-0 group-hover:mr-2"></span>Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-primaryText/70 hover:text-greenish transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-greenish mr-0 group-hover:mr-2"></span>Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primaryText/70 hover:text-greenish transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-greenish mr-0 group-hover:mr-2"></span>About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primaryText/70 hover:text-greenish transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-greenish mr-0 group-hover:mr-2"></span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primaryText">Customer Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primaryText/70 hover:text-greenish transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-primaryText/70 hover:text-greenish transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-primaryText/70 hover:text-greenish transition-colors text-sm">Track Order</a></li>
              <li><a href="#" className="text-primaryText/70 hover:text-greenish transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primaryText">Stay in the Loop</h3>
            <p className="text-primaryText/70 text-sm mb-4">
              Subscribe to our newsletter and get 10% off your first purchase!
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-primaryBg border border-cardBorder rounded-xl focus:outline-none focus:ring-2 focus:ring-greenish/50 text-sm transition-all"
              />
              <button type="button" className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wider mt-2">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cardBorder/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primaryText/50 text-xs text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} E-Commerce Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-primaryText/50">
            <a href="#" className="hover:text-primaryText transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primaryText transition-colors">Privacy</a>
            <a href="#" className="hover:text-primaryText transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;