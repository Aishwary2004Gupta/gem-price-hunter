
import { Link } from "react-router-dom";
import { ShoppingBag, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">
                GemPriceHunter
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Compare GeM product prices with other e-marketplaces to find the best deals
            </p>
            <div className="mt-4 flex space-x-4">
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product Categories
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/compare?category=electronics" className="text-gray-500 hover:text-primary">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/compare?category=office" className="text-gray-500 hover:text-primary">
                  Office Supplies
                </Link>
              </li>
              <li>
                <Link to="/compare?category=furniture" className="text-gray-500 hover:text-primary">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/compare?category=it" className="text-gray-500 hover:text-primary">
                  IT Equipment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-500 hover:text-primary">
                  Compare Prices
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Help & Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} GemPriceHunter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
