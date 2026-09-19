import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, Clock, CheckCircle2, MessageCircle, Calendar, ChevronDown, ArrowRight, Menu, X 
} from 'lucide-react';
import { cn } from '../utils/cn';
import { useContact } from '../context/ContactContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { handleContactClick } = useContact();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'AC Store', path: '/ac-store' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full relative z-50">
      {/* Top Bar */}
      <div className="hidden lg:block w-full bg-[#F8FAFC] border-b border-[#E2E8F0] py-2 text-[0.8rem] text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-[#0284C7] mr-1.5" />
              Surat, Gujarat
            </div>
            <div className="w-px h-4 bg-[#CBD5E1]"></div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-[#0284C7] mr-1.5" />
              Mon - Sat : 9:00 AM - 8:00 PM
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[#0D2136] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] mr-1.5" />
              Trusted AC Solutions Since 2018
            </div>
          </div>
        </div>
      </div>

      {/* Main Floating Navbar */}
      <div className={cn(
        "sticky top-0 w-full transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}>
        <nav className={cn(
          "mx-auto w-[95%] xl:w-full xl:max-w-7xl px-4 lg:px-6 flex justify-between items-center transition-all duration-300",
          "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E2E8F0]",
          isScrolled ? "rounded-full py-2.5" : "rounded-[2rem] py-3.5"
        )}>
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center pl-2">
            <img 
              src="/logo.png" 
              alt="SA Aircondition" 
              className="h-14 sm:h-[4.5rem] w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden flex-col leading-tight" style={{ display: 'none' }}>
               <span className="text-xl sm:text-2xl font-black text-[#0D2136]">SA Aircondition</span>
            </div>
          </Link>

          {/* Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={cn(
                    "relative font-bold text-[0.95rem] transition-colors duration-200 py-1 flex items-center group",
                    isActive ? "text-[#0284C7]" : "text-[#0D2136] hover:text-[#0284C7]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-[#0284C7] rounded-t-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 pr-2">
            
            {/* WhatsApp CTA */}
            <a 
              href="#" 
              onClick={handleContactClick}
              className="flex items-center bg-[#F0FDF4] border border-[#DCFCE7] hover:bg-[#DCFCE7] px-4 py-2 rounded-full transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center mr-3 shadow-[0_2px_10px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-bold text-[#166534] uppercase tracking-wider leading-none mb-1">Chat on WhatsApp</span>
                <span className="text-[0.85rem] font-semibold text-[#15803D] leading-none">Get Quick Support</span>
              </div>
            </a>

            {/* Book Service */}
            <Link 
              to="/book-service" 
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center text-[0.95rem] group"
            >
              <Calendar className="w-[1.1rem] h-[1.1rem] mr-2" />
              Book a Service
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center pr-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0D2136] p-2 hover:bg-[#F1F5F9] rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[110%] left-[2.5%] w-[95%] bg-white border border-[#E2E8F0] px-4 py-4 space-y-4 rounded-[2rem] shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "font-bold py-3 px-4 rounded-xl flex items-center justify-between",
                    location.pathname === link.path 
                      ? "bg-[#F0F9FF] text-[#0284C7]" 
                      : "text-[#0D2136] hover:bg-[#F8FAFC]"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5 text-[#94A3B8]" />}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col space-y-3">
              <a href="#" onClick={(e) => { setIsMobileMenuOpen(false); handleContactClick(e); }} className="w-full flex items-center bg-[#F0FDF4] text-[#166534] font-bold py-3.5 px-4 rounded-xl border border-[#DCFCE7] cursor-pointer">
                <MessageCircle className="w-6 h-6 mr-3 text-[#25D366]" />
                <div className="flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-wider leading-none mb-1">Chat on WhatsApp</span>
                  <span className="text-[0.95rem] leading-none">Get Quick Support</span>
                </div>
              </a>
              <Link to="/book-service" className="w-full">
                <button className="w-full bg-[#0284C7] text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-md">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
