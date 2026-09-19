import { ShieldCheck, Users, Settings, MapPin, Calendar, Diamond, Handshake, Star, HeadphonesIcon, MessageCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

const About = () => {
  const navigate = useNavigate();
  const { handleContactClick } = useContact();
  return (
    <div className="w-full bg-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="bg-[#EAF5FA] pt-12 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-[45%]">
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> ABOUT US <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0D2136] leading-[1.1] mb-5">
                Complete AC Solutions <br/><span className="text-[#0284C7]">Since 2018</span>
              </h1>
              <p className="text-[#475569] text-[1.05rem] mb-10 max-w-lg leading-relaxed">
                At SA Aircondition, we are committed to delivering reliable, affordable and high-quality cooling solutions for homes, offices and commercial spaces across Surat.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <ShieldCheck className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Trusted</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Since 2018</p>
                </div>
                <div className="flex flex-col">
                  <Users className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem] leading-tight">Thousands of<br/>Happy Customers</h4>
                </div>
                <div className="flex flex-col">
                  <Settings className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Professional</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Service</p>
                </div>
                <div className="flex flex-col">
                  <MapPin className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem] leading-tight">Home Service<br/>Across Surat</h4>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[55%] flex justify-end">
              <img src="/products/store-hero.jpg" alt="About SA Aircondition" className="w-full max-h-[380px] object-cover rounded-3xl shadow-xl mix-blend-multiply border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <img src="/services/hero.jpg" alt="SA Aircondition Shop" className="w-full h-[500px] object-cover" />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-[#0284C7] text-white p-4 rounded-xl flex items-center shadow-lg backdrop-blur-md bg-opacity-95">
                <MapPin className="w-8 h-8 mr-3" />
                <div>
                  <h4 className="font-bold text-[1.05rem]">Our Shop</h4>
                  <p className="text-[0.8rem] opacity-90">Udhana, Surat</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
              <span className="w-6 h-px bg-[#0284C7] mr-3"></span> OUR STORY <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2136] mb-6">A Journey of Trust and Comfort</h2>
            
            <div className="space-y-4 text-[#475569] text-[0.95rem] leading-relaxed mb-10">
              <p>
                SA Aircondition was established in 2018 with a simple goal — to provide reliable and professional AC solutions to our customers in Surat.
              </p>
              <p>
                What started as a small local business has now grown into a trusted name for AC sales, service, repair, installation and AMC. Over the years, we have served numerous homes, offices and commercial establishments, helping them stay cool and comfortable throughout the year.
              </p>
              <p>
                <strong>We believe</strong> in honest service, skilled workmanship and long-term relationships with our customers. Our focus has always been on quality service, genuine products and complete customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Calendar className="w-8 h-8 text-[#0284C7] mb-2" />
                <h4 className="font-black text-[#0D2136] text-[1.1rem]">2018</h4>
                <p className="text-[0.7rem] text-[#64748B] uppercase tracking-wider font-semibold">Established</p>
              </div>
              <div className="border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Users className="w-8 h-8 text-[#0284C7] mb-2" />
                <h4 className="font-black text-[#0D2136] text-[1.1rem]">Surat</h4>
                <p className="text-[0.7rem] text-[#64748B] uppercase tracking-wider font-semibold">Service Area</p>
              </div>
              <div className="border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Settings className="w-8 h-8 text-[#0284C7] mb-2" />
                <h4 className="font-black text-[#0D2136] text-[1.1rem] leading-tight">Complete</h4>
                <p className="text-[0.7rem] text-[#64748B] uppercase tracking-wider font-semibold mt-1">AC Solutions</p>
              </div>
              <div className="border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <svg className="w-8 h-8 text-[#0284C7] mb-2 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <h4 className="font-black text-[#0D2136] text-[1.1rem]">Customer</h4>
                <p className="text-[0.7rem] text-[#64748B] uppercase tracking-wider font-semibold">Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values Section */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[35%]">
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> OUR VALUES <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2136] mb-4">What Drives Us</h2>
              <p className="text-[#475569] text-[0.95rem] leading-relaxed max-w-md">
                Our values define who we are and how we work towards a cooler and better tomorrow.
              </p>
            </div>
            
            <div className="lg:w-[65%] grid sm:grid-cols-2 gap-6">
              <Card className="p-8 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                <Diamond className="w-10 h-10 text-[#0284C7] mb-5" />
                <h4 className="text-[1.1rem] font-bold text-[#0D2136] mb-2">Quality</h4>
                <p className="text-[0.85rem] text-[#64748B]">We deliver high-quality products and services.</p>
              </Card>
              <Card className="p-8 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                <Handshake className="w-10 h-10 text-[#0284C7] mb-5" />
                <h4 className="text-[1.1rem] font-bold text-[#0D2136] mb-2">Trust</h4>
                <p className="text-[0.85rem] text-[#64748B]">We build long-term relationships.</p>
              </Card>
              <Card className="p-8 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                <Users className="w-10 h-10 text-[#0284C7] mb-5" />
                <h4 className="text-[1.1rem] font-bold text-[#0D2136] mb-2">Customer First</h4>
                <p className="text-[0.85rem] text-[#64748B]">Your comfort is our priority.</p>
              </Card>
              <Card className="p-8 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                <Star className="w-10 h-10 text-[#0284C7] mb-5 fill-current" />
                <h4 className="text-[1.1rem] font-bold text-[#0D2136] mb-2">Reliability</h4>
                <p className="text-[0.85rem] text-[#64748B]">We stand by our commitments.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Brands */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-[35%]">
            <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
              <span className="w-6 h-px bg-[#0284C7] mr-3"></span> OUR BRANDS <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2136] mb-4">Trusted AC Brands</h2>
            <p className="text-[#475569] text-[0.95rem] leading-relaxed max-w-md">
              We deal in top AC brands to give you the best cooling experience.
            </p>
          </div>
          
          <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-4 gap-6">
            {['DAIKIN', 'SAMSUNG', 'LG', 'VOLTAS', 'HITACHI', 'O GENERAL', 'CARRIER', 'LLOYD'].map((brand, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate('/ac-store', { state: { brand: brand } })}
                className="flex items-center justify-center py-6 px-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#0284C7] transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <span className="font-black text-[#0D2136] text-xl tracking-tighter uppercase">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#E0F2FE] to-[#F0F9FF] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#BAE6FD] shadow-sm relative overflow-hidden">
          
          <div className="flex items-center gap-6 z-10 w-full md:w-auto">
            <div className="w-[5rem] h-[5rem] bg-white rounded-3xl flex items-center justify-center shadow-md flex-shrink-0 border border-[#E0F2FE]">
              <HeadphonesIcon className="w-10 h-10 text-[#0284C7]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D2136] mb-2">Need Expert Advice?</h3>
              <p className="text-[0.95rem] text-[#475569] max-w-lg">Our team is here to help you choose the right AC for your space. Get in touch with us today.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10 shrink-0">
            <a href="tel:+919558242458" className="w-full sm:w-auto">
              <Button className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold py-3.5 px-8 rounded-full shadow-md flex items-center justify-center border-0 text-[0.95rem] transition-transform hover:-translate-y-1">
                <HeadphonesIcon className="w-5 h-5 mr-2" />
                Call 95582 42458
              </Button>
            </a>
            <a href="#" onClick={handleContactClick} className="w-full sm:w-auto">
              <Button className="w-full bg-white hover:bg-gray-50 border-2 border-[#0284C7] text-[#0284C7] font-semibold py-3.5 px-8 rounded-full shadow-sm flex items-center justify-center text-[0.95rem] transition-transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
