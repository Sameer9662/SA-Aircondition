import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--deep-teal)] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="bg-white/95 px-3 py-2 rounded-xl inline-flex items-center justify-center">
                <img src="/logo.png" alt="SA Aircondition" className="h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-[var(--ice-blue)] text-sm mb-4">
              Complete AC Solutions Since 2018
            </p>
            <p className="text-sm text-gray-300">
              Service Area: Entire Surat
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--ice-light)]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/ac-store" className="hover:text-white transition-colors">AC Store</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--ice-light)]">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">AC Servicing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AC Repair</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AC Installation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Gas Charging</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AC Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AMC</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--ice-light)]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-[var(--cool-blue)]" />
                <span>SA Aircondition, Plot No.187-188,<br />nr. Maruti Nagar Circle, Udhana,<br />Railway Colony, Bhavani Nagar,<br />Surat, Gujarat 395012</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[var(--cool-blue)]" />
                <a href="tel:9558242458" className="hover:text-white">9558242458</a>, <a href="tel:9662241927" className="hover:text-white ml-1">9662241927</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[var(--cool-blue)]" />
                <a href="mailto:saaircondition786@gmail.com" className="hover:text-white">saaircondition786@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} SA Aircondition. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
