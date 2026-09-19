import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, PhoneCall, MessageCircle, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    if (isMobile) {
      window.open('https://wa.me/919558242458', '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <ContactContext.Provider value={{ handleContactClick }}>
      {children}
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </ContactContext.Provider>
  );
};

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#0D2136]/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors">
          <X className="w-5 h-5" />
        </button>
        
        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-[#0D2136] mb-2">Request Received!</h3>
            <p className="text-gray-500">We will call you back shortly at {formData.phone}.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black text-[#0D2136] mb-2">How can we help?</h3>
            <p className="text-gray-500 mb-6 text-sm">Choose how you'd like to connect with us.</p>
            
            <div className="space-y-4 mb-8">
              {/* Option 1: Call */}
              <a href="tel:+919558242458" className="flex items-center p-4 border border-gray-200 rounded-2xl hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#0284C7] transition-colors">
                  <PhoneCall className="w-6 h-6 text-[#0284C7] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D2136]">Call Us Now</h4>
                  <p className="text-sm text-gray-500">+91 9558242458</p>
                </div>
              </a>

              {/* Option 2: WhatsApp Web */}
              <a href="https://web.whatsapp.com/send?phone=919558242458" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-2xl hover:border-[#25D366] hover:bg-[#E8F9EE] transition-all group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D2136]">WhatsApp Web</h4>
                  <p className="text-sm text-gray-500">Continue to chat on desktop</p>
                </div>
              </a>
            </div>

            <div className="relative flex items-center py-2 mb-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">OR REQUEST A CALLBACK</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-all text-[#0D2136]"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-all text-[#0D2136]"
                />
              </div>
              <Button type="submit" className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 rounded-xl font-bold shadow-md border-0 flex justify-center items-center transition-all hover:-translate-y-0.5">
                Submit Request <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
