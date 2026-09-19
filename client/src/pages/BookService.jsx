import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Phone, CheckCircle2, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const BookService = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: location.state?.service || '',
    acType: '',
    date: '',
    time: '',
    address: '',
    problem: ''
  });

  useEffect(() => {
    if (location.state?.service) {
      setFormData(prev => ({ ...prev, service: location.state.service }));
    }
  }, [location.state?.service]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*AC Type:* ${formData.acType}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Address:* ${formData.address}
${formData.problem ? `*Problem Description:* ${formData.problem}` : ''}`;

    const whatsappNumber = '919558242458';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const inputClass = "w-full px-4 py-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-[#0284C7]/10 text-[#0D2136] font-semibold transition-all placeholder:text-[#94A3B8]";
  const labelClass = "block text-[0.8rem] font-bold text-[#0D2136] mb-2 uppercase tracking-wider";

  return (
    <div className="min-h-screen bg-[#F0F9FF] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0284C7] font-bold text-xs tracking-widest uppercase mb-4 flex items-center justify-center">
            <span className="w-8 h-px bg-[#0284C7] mr-3"></span> FAST & RELIABLE <span className="w-8 h-px bg-[#0284C7] ml-3"></span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0D2136] mb-5 leading-tight">Book Your AC Service</h1>
          <p className="text-[1.1rem] text-[#475569] max-w-2xl mx-auto">Schedule an appointment with our certified technicians in less than a minute.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left Side - Information Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#0284C7] to-[#0369A1] rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col">
            {/* Background Decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0EA5E9] opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-extrabold mb-4 leading-tight">Why Choose Us?</h3>
              <p className="text-blue-100 mb-12 leading-relaxed text-[1rem]">We provide Surat's most trusted air conditioning services with a guarantee of quality and transparency.</p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-5 shrink-0 border border-white/10 shadow-inner">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight mb-1">Certified Experts</h4>
                    <p className="text-blue-100 text-[0.9rem]">Highly trained and verified professionals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-5 shrink-0 border border-white/10 shadow-inner">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight mb-1">On-Time Service</h4>
                    <p className="text-blue-100 text-[0.9rem]">We value your time and stick to our schedule.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-5 shrink-0 border border-white/10 shadow-inner">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight mb-1">90-Day Warranty</h4>
                    <p className="text-blue-100 text-[0.9rem]">Peace of mind on all our repair services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-[1.5rem] p-6 border border-white/20 mt-auto">
              <p className="text-[0.8rem] text-blue-100 mb-2 font-bold tracking-widest uppercase">Need urgent help?</p>
              <a href="tel:+919558242458" className="flex items-center text-[1.4rem] font-black hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white text-[#0284C7] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                +91 95582 42458
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#F1F5F9]">
                <h3 className="text-2xl font-extrabold text-[#0D2136]">Service Details</h3>
                <span className="text-[#0284C7] bg-[#F0F9FF] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-[#E0F2FE]">Quick Book</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Mobile Number *</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="10-digit mobile number" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="service" className={labelClass}>Service Required *</label>
                  <select id="service" required value={formData.service} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select Service</option>
                    <option value="AC Servicing">AC Servicing</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Gas Charging">Gas Charging</option>
                    <option value="AC Cleaning">AC Cleaning</option>
                    <option value="AMC Solutions">AMC Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="acType" className={labelClass}>AC Type *</label>
                  <select id="acType" required value={formData.acType} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select AC Type</option>
                    <option value="Split AC">Split AC</option>
                    <option value="Window AC">Window AC</option>
                    <option value="Commercial AC">Commercial AC</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="date" className={labelClass}>Preferred Date *</label>
                  <input type="date" id="date" required value={formData.date} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="time" className={labelClass}>Preferred Time *</label>
                  <input type="time" id="time" required value={formData.time} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className={labelClass}>Address *</label>
                <input type="text" id="address" required value={formData.address} onChange={handleChange} className={inputClass} placeholder="Complete address in Surat" />
              </div>
              
              <div>
                <label htmlFor="problem" className={labelClass}>Problem Description (Optional)</label>
                <textarea 
                  id="problem" 
                  rows="3" 
                  value={formData.problem}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the issue you are facing..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-[1.1rem] py-4.5 px-6 rounded-xl font-black shadow-[0_8px_20px_rgba(2,132,199,0.3)] hover:shadow-[0_12px_25px_rgba(2,132,199,0.4)] hover:-translate-y-1 border-0 transition-all mt-8 flex items-center justify-center group uppercase tracking-wider">
                <Calendar className="w-5 h-5 mr-3" />
                Submit Booking Request
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-4 mt-6 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 mr-2.5 text-[#16A34A]" />
                <p className="text-[0.85rem] text-[#15803D] font-bold">
                  Your data is secure. You will be redirected to WhatsApp to confirm.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookService;
