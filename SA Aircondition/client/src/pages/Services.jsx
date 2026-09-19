import { useState } from 'react';
import { 
  Wrench, PenTool, ThermometerSnowflake, Settings, RefreshCw, ShieldCheck, 
  CheckCircle2, Calendar, MessageCircle, ChevronDown, Shield, MapPin, Users
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useContact } from '../context/ContactContext';

const servicesList = [
  { 
    id: 1, 
    title: 'AC Servicing', 
    description: 'Comprehensive cleaning and optimization of your AC for better cooling and longer life.', 
    icon: RefreshCw,
    features: ['Improves cooling efficiency', 'Removes dust & germs', 'Enhances AC lifespan'],
    image: '/services/ac-servicing.jpg',
    priceDetails: { main: '₹500', sub: 'Standard Service' }
  },
  { 
    id: 2, 
    title: 'AC Repair', 
    description: 'Fast and reliable repairs for all types of AC issues.', 
    icon: Wrench,
    features: ['Diagnoses exact problem', 'Genuine parts support', 'Quick turnaround time'],
    image: '/services/ac-repair.jpg',
    priceDetails: { main: 'Varies', sub: 'Depends on AC work' }
  },
  { 
    id: 3, 
    title: 'AC Installation', 
    description: 'Professional installation for Split, Window and Commercial ACs.', 
    icon: Settings,
    features: ['Safe & proper installation', 'Expert technical support', 'Best performance setup'],
    image: '/services/ac-installation.jpg',
    priceDetails: { main: '₹1200', sub: 'Standard Installation' }
  },
  { 
    id: 4, 
    title: 'Gas Charging', 
    description: 'Leak detection and expert gas refilling for optimal performance.', 
    icon: ThermometerSnowflake,
    features: ['Accurate gas filling', 'Leak detection', 'Better cooling performance'],
    image: '/services/gas-charging.jpg',
    priceDetails: { main: '₹3000', sub: 'Complete Refill' }
  },
  { 
    id: 5, 
    title: 'AC Cleaning', 
    description: 'Deep chemical cleaning to remove dust, mold and bacteria.', 
    icon: PenTool,
    features: ['Healthier indoor air', 'Removes bacteria & mold', 'Improves air quality'],
    image: '/services/ac-cleaning.jpg',
    priceDetails: { options: [{ label: 'Chemical Wash', value: '₹1500' }, { label: 'Jet Wash', value: '₹800' }] }
  },
  { 
    id: 6, 
    title: 'AMC Solutions', 
    description: 'Annual Maintenance Contracts for worry-free cooling.', 
    icon: ShieldCheck,
    features: ['Regular check-ups', 'Priority support', 'Cost-effective maintenance'],
    image: '/services/amc-solutions.jpg',
    priceDetails: { main: '₹400', sub: '4 Services / 1 AC' }
  }
];

const faqs = [
  { question: 'Do you provide home service in Surat?', answer: 'Yes, we provide doorstep AC services across all areas in Surat.' },
  { question: 'What AC brands do you service?', answer: 'We service all major brands including LG, Daikin, Voltas, Samsung, Lloyd, Hitachi, and more.' },
  { question: 'How often should I service my AC?', answer: 'We recommend servicing your AC at least twice a year for optimal performance and longevity.' },
  { question: 'Do you offer AMC plans?', answer: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) for residential and commercial ACs.' },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const { handleContactClick } = useContact();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <section className="bg-[#F0F9FF] pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[55%]">
              <span className="text-[#0284C7] font-bold text-xs tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> OUR SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0D2136] leading-[1.1] mb-6">
                Professional AC Services <br/><span className="text-[#0284C7]">in Surat</span>
              </h1>
              <p className="text-[#64748B] text-[1.1rem] mb-10 max-w-lg leading-relaxed">
                Reliable, affordable and expert AC solutions for your home, office and commercial spaces. We keep your cooling system running efficiently all year round.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <Shield className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Trusted</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Since 2018</p>
                </div>
                <div className="flex flex-col">
                  <MapPin className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Home Service</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Across Surat</p>
                </div>
                <div className="flex flex-col">
                  <Settings className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Expert</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Technicians</p>
                </div>
                <div className="flex flex-col">
                  <Users className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Customer</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Focused</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[45%] relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/services/hero.jpg" alt="AC Technician" className="w-full h-[450px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0284C7] font-bold text-xs tracking-widest uppercase mb-4 flex items-center justify-center">
            <span className="w-6 h-px bg-[#0284C7] mr-3"></span> OUR SERVICES <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0D2136] mb-5">Complete AC Solutions</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-[1.05rem]">
            From routine servicing to complex repairs, we provide end-to-end AC services for residential, commercial and industrial spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="relative w-full h-[520px] cursor-pointer group [perspective:1000px]"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] relative ${activeService === service.id ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  {/* Front Side */}
                  <Card className={`absolute inset-0 [backface-visibility:hidden] bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${activeService === service.id ? 'pointer-events-none' : ''}`}>
                    {/* Image Section */}
                    <div className="h-52 relative overflow-hidden bg-[#F8FAFC]">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      
                      {/* Floating Icon */}
                      <div className="absolute -bottom-6 left-6 w-[3.2rem] h-[3.2rem] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border border-[#F1F5F9]">
                        <Icon className="w-[1.4rem] h-[1.4rem] text-[#0284C7]" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-7 pt-10 flex flex-col flex-grow">
                      <h3 className="text-xl font-extrabold text-[#0D2136] mb-2">{service.title}</h3>
                      <p className="text-[0.9rem] text-[#64748B] mb-6 leading-relaxed min-h-[3rem]">{service.description}</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[0.85rem] text-[#475569] font-medium">
                            <CheckCircle2 className="w-[1.1rem] h-[1.1rem] text-[#0284C7] mr-2.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="w-full py-2.5 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#F0F9FF] transition-colors duration-300 z-10 border border-slate-100 group-hover:border-[#BAE6FD]">
                        <span className="text-[0.9rem] font-bold text-[#0284C7]">Tap to view pricing</span>
                      </div>
                    </div>
                  </Card>

                  {/* Back Side */}
                  <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 bg-gradient-to-br from-[#0284C7] to-[#0369A1] shadow-xl rounded-2xl flex flex-col items-center text-center text-white border border-[#38BDF8] ${activeService === service.id ? '' : 'pointer-events-none'}`}>
                     
                     <h4 className="font-extrabold text-2xl mb-6 border-b border-white/20 pb-4 w-full flex items-center justify-center gap-3">
                       <Icon className="w-7 h-7 text-[#BAE6FD]" />
                       {service.title}
                     </h4>
                     
                     <div className="flex-grow flex flex-col justify-center w-full">
                       {service.priceDetails.options ? (
                         <div className="space-y-4 w-full">
                           {service.priceDetails.options.map((opt, i) => (
                             <div key={i} className="flex justify-between items-center bg-white/10 rounded-xl p-4 border border-white/5 shadow-inner">
                               <span className="text-lg font-medium">{opt.label}</span>
                               <span className="text-xl font-extrabold text-[#BAE6FD]">{opt.value}</span>
                             </div>
                           ))}
                         </div>
                       ) : (
                         <div className="flex flex-col items-center justify-center h-full">
                           <span className="text-5xl font-black text-white drop-shadow-md mb-4">{service.priceDetails.main}</span>
                           <span className="text-lg text-[#E0F2FE] font-medium bg-black/10 py-2 px-6 rounded-full border border-white/10">{service.priceDetails.sub}</span>
                         </div>
                       )}
                     </div>
                     
                     <button 
                       onClick={(e) => {
                         e.stopPropagation();
                         navigate('/book-service', { state: { service: service.title } });
                       }}
                       className="mt-8 w-full bg-white text-[#0284C7] hover:bg-[#F0F9FF] py-4 rounded-full font-bold text-lg transition-colors shadow-md inline-flex justify-center items-center hover:scale-[1.02] active:scale-[0.98]"
                     >
                       Book Now <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" /></svg>
                     </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E0F2FE] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-sm">
          <div className="flex items-center gap-6 z-10 w-full lg:w-auto">
            <div className="w-[4.5rem] h-[4.5rem] bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
              <Calendar className="w-8 h-8 text-[#0284C7]" />
            </div>
            <div>
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-1.5 block">- NEED HELP? -</span>
              <h3 className="text-2xl md:text-[1.7rem] font-extrabold text-[#0D2136] mb-2">Book Your AC Service Today</h3>
              <p className="text-[0.9rem] text-[#475569] max-w-lg leading-relaxed">Get professional AC service at your doorstep in Surat. Our team will contact you shortly to confirm your booking.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto z-10 shrink-0">
            <Link to="/book-service" className="w-full sm:w-auto">
              <Button className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold py-3.5 px-8 rounded-full shadow-md flex items-center justify-center border-0 text-[0.95rem]">
                Book a Service
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <a href="#" onClick={handleContactClick} className="w-full sm:w-auto">
              <Button className="w-full bg-white hover:bg-gray-50 border-2 border-[#E0F2FE] text-[#0D2136] font-semibold py-3.5 px-8 rounded-full shadow-sm flex items-center justify-center text-[0.95rem]">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Grid: Why Choose Us & FAQ */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Why Choose Us */}
            <div>
              <h3 className="text-[1.7rem] font-extrabold text-[#0D2136] mb-8">Why Choose SA Aircondition?</h3>
              <ul className="space-y-5">
                {[
                  'Trusted service provider since 2018',
                  'Experienced and skilled technicians',
                  'Home service across Surat',
                  'Support for all major AC brands',
                  'Transparent pricing',
                  'Customer satisfaction is our priority'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#475569] font-medium text-[0.95rem]">
                    <div className="w-[1.6rem] h-[1.6rem] rounded-full bg-[#E0F2FE] flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[1.7rem] font-extrabold text-[#0D2136]">Frequently Asked Questions</h3>
                <span className="text-[#0284C7] text-sm font-semibold cursor-pointer hover:underline">View All →</span>
              </div>
              <div className="space-y-3.5">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:border-[#0284C7] shadow-sm transition-all group"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="p-5 flex justify-between items-center bg-white z-10 relative">
                      <span className={`font-semibold text-[0.95rem] transition-colors ${openFaq === idx ? 'text-[#0284C7]' : 'text-[#0D2136] group-hover:text-[#0284C7]'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#0284C7]' : 'text-[#94A3B8] group-hover:text-[#0284C7]'}`} />
                    </div>
                    
                    <div 
                      className="px-5 transition-all duration-300 ease-in-out overflow-hidden"
                      style={{ maxHeight: openFaq === idx ? '200px' : '0px', opacity: openFaq === idx ? 1 : 0 }}
                    >
                      <p className="text-[#475569] text-[0.95rem] leading-relaxed pb-5 pt-2 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
