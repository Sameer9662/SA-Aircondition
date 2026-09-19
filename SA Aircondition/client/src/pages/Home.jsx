import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, MapPin, Settings, CheckCircle2,
  Wrench, PenTool, ThermometerSnowflake, RefreshCw, 
  ArrowRight, Snowflake, ArrowLeft,
  MessageCircle, Star, X
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useContact } from '../context/ContactContext';

// Mock Data for Services
const servicesList = [
  { id: 1, title: 'AC Servicing', description: 'Comprehensive cleaning and optimization.', icon: RefreshCw, priceDetails: { main: '₹500', sub: 'Standard Service' } },
  { id: 2, title: 'AC Repair', description: 'Fast and reliable repairs for all AC issues.', icon: Wrench, priceDetails: { main: 'Varies', sub: 'Depends on AC work' } },
  { id: 3, title: 'AC Installation', description: 'Professional installation for all AC types.', icon: Settings, priceDetails: { main: '₹1200', sub: 'Standard Installation' } },
  { id: 4, title: 'Gas Charging', description: 'Leak detection and gas refilling.', icon: ThermometerSnowflake, priceDetails: { main: '₹3000', sub: 'Complete Refill' } },
  { id: 5, title: 'AC Cleaning', description: 'Deep cleaning for better air quality.', icon: PenTool, priceDetails: { options: [{ label: 'Chemical Wash', value: '₹1500' }, { label: 'Jet Wash', value: '₹800' }] } },
  { id: 6, title: 'AMC Solutions', description: 'Annual maintenance for worry-free cooling.', icon: ShieldCheck, priceDetails: { main: '₹400', sub: '4 Services / 1 AC' } }
];

const categories = [
  { id: 1, name: 'Split AC', desc: 'Best for homes & offices', image: '/products/daikin.jpeg' },
  { id: 2, name: 'Window AC', desc: 'Compact & powerful', image: '/products/voltas.jpeg' },
  { id: 3, name: '1 Ton AC', desc: 'Perfect for small rooms', image: '/products/lg.jpeg' },
  { id: 4, name: '1.5 Ton AC', desc: 'Ideal for medium rooms', image: '/products/lloyd.jpeg' }
];

const initialTestimonials = [
  { id: 1, name: 'Rohit Patel', loc: 'Surat', text: '"Excellent service! The team was professional and fixed my AC quickly. Highly recommended!"', image: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 5 },
  { id: 2, name: 'Ayesha Khan', loc: 'Surat', text: '"Very reliable and polite staff. Got my AC serviced at home. Great experience!"', image: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 5 },
  { id: 3, name: 'Jignesh Mehta', loc: 'Surat', text: '"Good pricing and genuine service. Will definitely use their AMC service again."', image: 'https://randomuser.me/api/portraits/men/67.jpg', rating: 5 }
];

const Home = () => {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', loc: '', text: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const testimonialsRef = React.useRef(null);
  const { handleContactClick } = useContact();
  const navigate = useNavigate();

  const scrollTestimonials = (direction) => {
    if (testimonialsRef.current) {
      const scrollAmount = 350; // approximate width of one card + gap
      const currentScroll = testimonialsRef.current.scrollLeft;
      testimonialsRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    const reviewToAdd = {
      id: Date.now(),
      name: newReview.name,
      loc: newReview.loc || 'Surat',
      text: `"${newReview.text}"`,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newReview.name)}&background=random&color=fff`,
      rating: newReview.rating
    };
    setReviews([reviewToAdd, ...reviews]);
    setShowReviewModal(false);
    setNewReview({ name: '', loc: '', text: '', rating: 5 });
  };
  return (
    <div className="w-full bg-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="bg-[#EAF5FA] pt-12 pb-24 overflow-hidden relative">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            <div className="lg:w-[45%] z-10 pt-4 lg:pt-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse"></span>
                Cooler Spaces, Happier Lives
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-black text-[#0D2136] leading-[1.05] mb-6">
                Stay Cool <br/><span className="text-[#0284C7]">All Year Round</span>
              </h1>
              <p className="text-[#475569] text-[1.1rem] mb-8 max-w-lg leading-relaxed font-medium">
                Sales, Service, Repair, Installation & AMC — Complete AC Solutions for your home, office and commercial spaces across Surat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link to="/book-service">
                  <Button className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white py-4 px-8 rounded-full font-bold shadow-[0_8px_25px_-5px_rgba(2,132,199,0.5)] flex items-center justify-center border-0 text-[0.95rem] transition-all hover:-translate-y-1">
                    Book a Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/ac-store">
                  <Button className="w-full sm:w-auto bg-white border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#F0F9FF] py-4 px-8 rounded-full font-bold shadow-sm flex items-center justify-center text-[0.95rem] transition-all hover:-translate-y-1">
                    Explore AC Store
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-6 bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm inline-flex">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0284C7]"><ShieldCheck className="w-5 h-5" /></div>
                  <div className="leading-tight"><span className="block font-bold text-[#0D2136] text-[0.9rem]">Trusted</span><span className="block text-[0.7rem] text-[#64748B]">Since 2018</span></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0284C7]"><MapPin className="w-5 h-5" /></div>
                  <div className="leading-tight"><span className="block font-bold text-[#0D2136] text-[0.9rem]">Home Service</span><span className="block text-[0.7rem] text-[#64748B]">Across Surat</span></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0284C7]"><Settings className="w-5 h-5" /></div>
                  <div className="leading-tight"><span className="block font-bold text-[#0D2136] text-[0.9rem]">Expert</span><span className="block text-[0.7rem] text-[#64748B]">Technicians</span></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[55%] relative z-0 w-full mt-8 lg:mt-0">
              {/* Aesthetic glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] rounded-[2.5rem] blur-2xl opacity-20 transform rotate-3 scale-105"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white h-[350px] sm:h-[450px] lg:h-[550px] w-full">
                <img 
                  src="/hero-ac.jpg" 
                  alt="Stay Cool" 
                  className="absolute top-0 right-0 w-[180%] sm:w-[150%] md:w-[200%] h-full max-w-none object-cover object-right transform hover:scale-105 origin-right transition-transform duration-1000 ease-in-out" 
                />
                
                {/* Inner Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-6 left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-[#E2E8F0] animate-[bounce_4s_infinite]">
                 <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-inner">
                   <ThermometerSnowflake className="text-[#0284C7] w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-[0.7rem] text-[#64748B] font-bold uppercase tracking-wider">Fast Cooling</p>
                   <p className="text-[0.95rem] font-black text-[#0D2136]">Within Minutes</p>
                 </div>
              </div>
              
              <div className="absolute top-10 -right-6 bg-white py-2 px-4 rounded-xl shadow-lg flex items-center gap-2 border border-[#E2E8F0] animate-[bounce_5s_infinite_0.5s]">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-[0.8rem] font-bold text-[#0D2136]">Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Services */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Aesthetic Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#EAF5FA] to-transparent opacity-70 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-[#0284C7] font-extrabold text-[0.75rem] tracking-widest uppercase mb-4 shadow-sm border border-blue-100">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D2136] mb-4 tracking-tight">Complete AC Services</h2>
            <p className="text-[#475569] text-[1.05rem] max-w-2xl mx-auto font-medium">
              From routine servicing to complex repairs, we provide reliable and professional AC solutions for homes, offices and commercial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {servicesList.map(srv => {
              const Icon = srv.icon;
              return (
                <div 
                  key={srv.id} 
                  className="relative w-full h-[320px] cursor-pointer group [perspective:1000px]"
                  onClick={() => setActiveService(activeService === srv.id ? null : srv.id)}
                >
                  <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] relative ${activeService === srv.id ? '[transform:rotateY(180deg)]' : ''}`}>
                    
                    {/* Front Side */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] p-7 bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(2,132,199,0.2)] hover:border-[#38BDF8] transition-all duration-300 rounded-[2rem] flex flex-col items-center text-center overflow-hidden ${activeService === srv.id ? 'pointer-events-none' : ''}`}>
                      
                      {/* Background watermark icon */}
                      <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-50 opacity-0 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-500 ease-out pointer-events-none" />
                      
                      {/* Glowing Icon Container */}
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100 flex items-center justify-center mb-6 shadow-inner border border-blue-50 group-hover:from-[#0284C7] group-hover:to-[#38BDF8] transition-colors duration-300 z-10">
                        <Icon className="w-8 h-8 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h4 className="font-extrabold text-[#0D2136] text-[1.05rem] mb-3 z-10">{srv.title}</h4>
                      <p className="text-[#64748B] text-[0.8rem] mb-6 flex-grow leading-relaxed z-10 font-medium">{srv.description}</p>
                      
                      {/* Tap to view price */}
                      <div className="mt-auto w-full py-2 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#F0F9FF] transition-colors duration-300 z-10 shadow-sm border border-slate-100 group-hover:border-[#BAE6FD]">
                        <span className="text-[0.75rem] font-bold text-[#0284C7]">Tap to view pricing</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 bg-gradient-to-br from-[#0284C7] to-[#0369A1] shadow-xl rounded-[2rem] flex flex-col items-center text-center text-white border border-[#38BDF8] ${activeService === srv.id ? '' : 'pointer-events-none'}`}>
                       
                       <h4 className="font-extrabold text-[1.1rem] mb-4 border-b border-white/20 pb-3 w-full flex items-center justify-center gap-2">
                         <Icon className="w-5 h-5 text-[#BAE6FD]" />
                         {srv.title}
                       </h4>
                       
                       <div className="flex-grow flex flex-col justify-center w-full">
                         {srv.priceDetails.options ? (
                           <div className="space-y-3 w-full">
                             {srv.priceDetails.options.map((opt, i) => (
                               <div key={i} className="flex justify-between items-center bg-white/10 rounded-lg p-3 border border-white/5 shadow-inner">
                                 <span className="text-[0.85rem] font-medium">{opt.label}</span>
                                 <span className="text-[0.95rem] font-extrabold text-[#BAE6FD]">{opt.value}</span>
                               </div>
                             ))}
                           </div>
                         ) : (
                           <div className="flex flex-col items-center justify-center h-full">
                             <span className="text-3xl font-black text-white drop-shadow-md mb-2">{srv.priceDetails.main}</span>
                             <span className="text-[0.85rem] text-[#E0F2FE] font-medium bg-black/10 py-1.5 px-4 rounded-full border border-white/10">{srv.priceDetails.sub}</span>
                           </div>
                         )}
                       </div>
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate('/book-service', { state: { service: srv.title } });
                         }}
                         className="mt-4 w-full bg-white text-[#0284C7] hover:bg-[#F0F9FF] py-3 rounded-xl font-bold text-[0.9rem] transition-colors shadow-md inline-flex justify-center items-center hover:scale-[1.02] active:scale-[0.98]"
                       >
                         Book Now <ArrowRight className="w-4 h-4 ml-1.5" />
                       </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> WHY CHOOSE US <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D2136] mb-6 leading-[1.1]">
                Your Comfort<br/>Our Priority
              </h2>
              <p className="text-[#475569] text-[1.05rem] mb-8 leading-relaxed max-w-md">
                We are committed to providing high-quality AC solutions with reliable service, genuine products and expert support.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Trusted Since 2018', 'Skilled & Certified Technicians', 'Home Service Across Surat', 'Support for All Major AC Brands', 'Affordable & Transparent Pricing'].map((pt, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#0284C7] flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#0D2136] font-medium text-[0.95rem]">{pt}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button className="bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 px-8 rounded-full font-bold shadow-sm border-0 text-[0.95rem]">
                  Know More About Us <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-end">
              <div className="relative w-full max-w-[500px]">
                <img src="/services/ac-installation.jpg" alt="Technician" className="w-full h-[500px] object-cover rounded-[2rem] shadow-xl" />
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center border border-[#E2E8F0] z-20">
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center mr-4 flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D2136] text-[0.9rem] leading-tight">Professional Service</h4>
                    <p className="text-[0.75rem] text-[#64748B]">for a Cooler Tomorrow</p>
                  </div>
                </div>
              </div>
              
              {/* Right Side Floating Card */}
              <div className="hidden md:flex absolute top-10 -right-8 w-64 bg-white rounded-3xl shadow-xl border border-[#E2E8F0] p-6 flex-col">
                <Snowflake className="w-10 h-10 text-[#0284C7] mb-4" />
                <h4 className="font-extrabold text-[#0D2136] text-xl mb-2 leading-tight">Cooler Air<br/>Healthier Living</h4>
                <p className="text-[0.8rem] text-[#64748B] mb-6 leading-relaxed">Clean, fresh and cool air for you and your loved ones.</p>
                <div className="w-10 h-10 rounded-full bg-[#0284C7] flex items-center justify-center text-white cursor-pointer hover:bg-[#0369A1] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Brands */}
      <section className="py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center justify-center">
            <span className="w-6 h-px bg-[#0284C7] mr-3"></span> TOP BRANDS <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2136] mb-2">Trusted AC Brands</h2>
          <p className="text-[#475569] text-[0.95rem]">We deal in leading AC brands to give you the best cooling experience.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {['DAIKIN', 'SAMSUNG', 'LG', 'VOLTAS', 'HITACHI', 'O GENERAL', 'CARRIER', 'LLOYD'].map((brand, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/ac-store', { state: { brand: brand } })}
              className="bg-white border border-[#E2E8F0] rounded-xl h-20 flex items-center justify-center hover:border-[#0284C7] hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
            >
              <span className="font-black text-[#0D2136] text-[1.15rem] tracking-tighter uppercase">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Explore AC Store */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> EXPLORE AC STORE <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2136] mb-2">Find the Perfect AC for Your Space</h2>
              <p className="text-[#475569] text-[0.95rem]">Choose from a wide range of energy-efficient and high-performance ACs.</p>
            </div>
            <Link to="/ac-store" className="mt-4 md:mt-0">
              <Button className="bg-[#0284C7] hover:bg-[#0369A1] text-white py-3 px-6 rounded-full font-bold shadow-sm border-0 text-[0.95rem]">
                Browse All ACs <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link to="/ac-store" key={cat.id}>
                <Card className="bg-[#EAF5FA] rounded-3xl p-6 border-0 shadow-none hover:shadow-md transition-shadow h-[280px] flex flex-col group relative overflow-hidden">
                  <h3 className="text-xl font-extrabold text-[#0D2136] mb-1 relative z-10">{cat.name}</h3>
                  <p className="text-[0.8rem] text-[#64748B] font-medium relative z-10">{cat.desc}</p>
                  <div className="absolute -bottom-4 right-0 left-0 flex justify-center w-full px-6 transition-transform duration-500 group-hover:scale-110">
                    <img src={cat.image} alt={cat.name} className="w-full h-auto object-contain mix-blend-multiply" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
              <span className="w-6 h-px bg-[#0284C7] mr-3"></span> WHAT OUR CUSTOMERS SAY <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D2136] tracking-tight">Trusted by Families <br className="hidden md:block"/> Across Surat</h2>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={() => setShowReviewModal(true)} className="bg-white border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#F0F9FF] font-bold py-2.5 px-6 rounded-full shadow-sm flex items-center">
              <Star className="w-4 h-4 mr-2 fill-current" /> Write a Review
            </Button>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollTestimonials('left')}
                className="w-11 h-11 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollTestimonials('right')}
                className="w-11 h-11 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all shadow-sm hover:shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar gap-6 snap-x scroll-smooth"
        >
          {reviews.map(testi => (
            <div key={testi.id} className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px]">
              <Card className="p-8 bg-white border border-[#E2E8F0] rounded-[2rem] shadow-sm flex flex-col h-full hover:shadow-[0_15px_30px_-10px_rgba(2,132,199,0.15)] hover:border-[#BAE6FD] transition-all relative overflow-hidden group">
                {/* Large Background Quote */}
                <div className="absolute top-4 right-6 text-9xl text-blue-50 font-serif leading-none opacity-50 group-hover:text-blue-100 transition-colors pointer-events-none">"</div>
                
                <div className="flex text-yellow-400 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testi.rating ? 'fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-[#334155] text-[1.05rem] italic mb-8 flex-grow leading-relaxed relative z-10 font-medium">
                  {testi.text}
                </p>
                <div className="flex items-center mt-auto relative z-10 pt-6 border-t border-gray-100">
                  <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-extrabold text-[#0D2136] text-[0.95rem]">{testi.name}</h5>
                    <p className="text-[0.75rem] text-[#64748B] font-medium">{testi.loc}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="pb-0 relative overflow-hidden bg-white mt-10">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#EAF5FA] to-[#E0F2FE]" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 border-b border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-[55%]">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D2136] mb-4">Ready for a Cooler Tomorrow?</h2>
              <p className="text-[#475569] text-[1.05rem] mb-8">Book your AC service or explore our AC store today.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service" className="w-full sm:w-auto">
                  <Button className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 px-8 rounded-full font-bold shadow-sm flex items-center justify-center border-0 text-[0.95rem]">
                    Book a Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#" onClick={handleContactClick} className="w-full sm:w-auto">
                  <Button className="w-full bg-white hover:bg-gray-50 border-2 border-[#0284C7] text-[#0284C7] font-bold py-3.5 px-8 rounded-full shadow-sm flex items-center justify-center text-[0.95rem]">
                    <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="md:w-[45%] flex justify-end">
              <img src="/products/store-hero.jpg" alt="Cool AC" className="w-full max-w-[450px] object-cover rounded-3xl mix-blend-multiply border-[6px] border-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#0D2136]/60 backdrop-blur-sm" onClick={() => setShowReviewModal(false)}></div>
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <button onClick={() => setShowReviewModal(false)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-black text-[#0D2136] mb-2">Write a Review</h3>
            <p className="text-gray-500 mb-6 text-sm">Share your experience with SA Aircondition.</p>
            
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-bold text-[#0D2136] mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button 
                      key={star} 
                      type="button" 
                      onClick={() => setNewReview({...newReview, rating: star})}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`transition-all duration-200 focus:outline-none cursor-pointer transform hover:scale-110 ${
                        (hoverRating || newReview.rating) >= star 
                          ? 'text-[#FACC15]' 
                          : 'text-[#E2E8F0]'
                      }`}
                    >
                      <Star className="w-9 h-9 fill-current drop-shadow-sm" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-bold text-[#0D2136] mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all text-[#0D2136]"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-bold text-[#0D2136] mb-2">Location (Optional)</label>
                <input 
                  type="text" 
                  value={newReview.loc}
                  onChange={(e) => setNewReview({...newReview, loc: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all text-[#0D2136]"
                  placeholder="e.g. Adajan, Surat"
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#0D2136] mb-2">Your Review</label>
                <textarea 
                  required
                  rows="4"
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all resize-none text-[#0D2136]"
                  placeholder="Tell us what you loved about our service..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-4 rounded-xl font-bold shadow-[0_8px_20px_-5px_rgba(2,132,199,0.4)] transition-all hover:-translate-y-0.5 border-0">
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
