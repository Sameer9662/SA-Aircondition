import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Users, HeadphonesIcon, ExternalLink } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useContact } from '../context/ContactContext';

const Contact = () => {
  const { handleContactClick } = useContact();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '919558242458';
    const text = `*New Contact Message*%0A
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    // Always fallback to standard wa.me for highest compatibility on both web & mobile
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-[#F8FAFC] pb-0">
      
      {/* 1. Hero Section */}
      <section className="bg-white pt-12 pb-24 overflow-hidden border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-[50%]">
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                <span className="w-6 h-px bg-[#0284C7] mr-3"></span> CONTACT US <span className="w-6 h-px bg-[#0284C7] ml-3"></span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold text-[#0D2136] leading-[1.1] mb-5">
                We're Here <br/><span className="text-[#0284C7]">To Help You</span>
              </h1>
              <p className="text-[#475569] text-[1.1rem] mb-10 max-w-lg leading-relaxed">
                Have a question, need a service, or want to buy a new AC? Get in touch with us. Our team is always ready to assist you with the best cooling solutions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <HeadphonesIcon className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Quick Response</h4>
                  <p className="text-[0.75rem] text-[#64748B]">We reply within 1 hour</p>
                </div>
                <div className="flex flex-col">
                  <ShieldCheck className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Expert Support</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Get professional advice</p>
                </div>
                <div className="flex flex-col">
                  <MapPin className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem]">Local Service</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Across Surat</p>
                </div>
                <div className="flex flex-col">
                  <Users className="w-7 h-7 text-[#0284C7] mb-2" />
                  <h4 className="font-bold text-[#0D2136] text-[0.85rem] leading-tight">Customer First</h4>
                  <p className="text-[0.75rem] text-[#64748B]">Your comfort is our priority</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[50%] flex justify-end relative">
              <img src="/products/store-hero.jpg" alt="Contact SA Aircondition" className="w-full max-h-[400px] object-cover rounded-3xl shadow-xl mix-blend-multiply border-[6px] border-[#F1F5F9]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Card className="p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#0284C7]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D2136] mb-1">Call Us</h4>
              <div className="flex flex-col mb-2">
                <a href="tel:9558242458" className="text-[#0284C7] font-semibold text-[0.95rem] hover:underline">95582 42458</a>
                <a href="tel:9662241927" className="text-[#475569] font-semibold text-[0.95rem] hover:text-[#0284C7] hover:underline">96622 41927</a>
              </div>
              <p className="text-[0.75rem] text-[#64748B] flex items-center"><Clock className="w-3 h-3 mr-1" /> Mon - Sun : 9:00 AM - 8:00 PM</p>
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D2136] mb-1">Chat on WhatsApp</h4>
              <a href="#" onClick={handleContactClick} className="text-[#16A34A] font-semibold text-[0.95rem] hover:underline block mb-2">95582 42458</a>
              <p className="text-[0.75rem] text-[#64748B]">Get quick support on WhatsApp</p>
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#0284C7]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D2136] mb-1">Email Us</h4>
              <a href="mailto:saaircondition786@gmail.com" className="text-[#0284C7] font-semibold text-[0.85rem] hover:underline block mb-2 break-all">saaircondition786@gmail.com</a>
              <p className="text-[0.75rem] text-[#64748B]">We typically reply within 24 hours</p>
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#0284C7]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D2136] mb-1">Our Location</h4>
              <p className="text-[0.8rem] text-[#475569] leading-relaxed">
                Shop No. 1, Plot No. 187–188,<br/>
                Near Maruti Nagar Circle,<br/>
                Udhna Yard, Surat – 394210,<br/>
                Gujarat, India
              </p>
            </div>
          </Card>

        </div>
      </section>

      {/* 3. Form and Map Section */}
      <section className="py-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Form */}
          <Card className="lg:w-1/2 bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0D2136] mb-2">Send Us a Message</h3>
            <p className="text-[#64748B] text-[0.9rem] mb-8">Fill out the form below and our team will get back to you soon.</p>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[0.85rem] font-bold text-[#0D2136] mb-2">Your Name <span className="text-red-500">*</span></label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all" />
                </div>
                <div>
                  <label className="block text-[0.85rem] font-bold text-[#0D2136] mb-2">Your Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[0.85rem] font-bold text-[#0D2136] mb-2">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all" />
                </div>
                <div>
                  <label className="block text-[0.85rem] font-bold text-[#0D2136] mb-2">Select Subject <span className="text-red-500">*</span></label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all text-[#475569]">
                    <option value="" disabled>-- Select an option --</option>
                    <option value="AC Servicing / Repair">AC Servicing / Repair</option>
                    <option value="New AC Enquiry">New AC Enquiry</option>
                    <option value="AMC Solutions">AMC Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[0.85rem] font-bold text-[#0D2136] mb-2">Your Message <span className="text-red-500">*</span></label>
                <textarea rows="5" name="message" required value={formData.message} onChange={handleChange} placeholder="Type your message here..." className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-4 rounded-xl font-bold shadow-md flex items-center justify-center text-[0.95rem] transition-transform border-0 hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                Send Message
              </button>
            </form>
          </Card>

          {/* Map */}
          <Card className="lg:w-1/2 bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0D2136] mb-1">Find Us Here</h3>
                <p className="text-[#64748B] text-[0.9rem]">Visit our shop or get directions on Google Maps.</p>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=SA+Aircondition,+Plot+No.187-188,+nr.+Maruti+Nagar+Circle,+Udhana,+Railway+Colony,+Bhavani+Nagar,+Surat,+Gujarat+395012" target="_blank" rel="noreferrer" className="hidden sm:flex items-center text-[#0284C7] font-semibold text-[0.8rem] border border-[#0284C7] px-4 py-2 rounded-full hover:bg-[#F0F9FF] transition-colors whitespace-nowrap">
                Open in Google Maps <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="flex-grow rounded-2xl overflow-hidden border border-[#E2E8F0] bg-gray-100 min-h-[350px]">
              <iframe 
                title="SA Aircondition Location"
                src="https://maps.google.com/maps?q=SA%20Aircondition,%20Plot%20No.187-188,%20nr.%20Maruti%20Nagar%20Circle,%20Udhana,%20Railway%20Colony,%20Bhavani%20Nagar,%20Surat,%20Gujarat%20395012&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </Card>

        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="pb-20 pt-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#E0F2FE] to-[#F0F9FF] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#BAE6FD] shadow-sm relative overflow-hidden">
          
          <div className="flex items-center gap-6 z-10 w-full md:w-auto">
            <div className="w-[5rem] h-[5rem] bg-white rounded-3xl flex items-center justify-center shadow-md flex-shrink-0 border border-[#E0F2FE]">
              <HeadphonesIcon className="w-10 h-10 text-[#0284C7]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D2136] mb-2">Need Immediate Assistance?</h3>
              <p className="text-[0.95rem] text-[#475569] max-w-lg">Call us or chat on WhatsApp for quick support. We're always here to help you with your AC needs.</p>
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

export default Contact;
