import { useState, useEffect } from 'react';
import { Search, Heart, ShieldCheck, CheckCircle2, Star, HeadphonesIcon, Truck, Settings, MessageCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

const demoProducts = [
  {
    id: 1,
    brand: 'DAIKIN',
    name: 'Daikin 1.5 Ton 5 Star Inverter Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Inverter',
    starRating: '4.8',
    reviews: '120',
    price: '₹45,500',
    originalPrice: '₹52,000',
    discount: '12% off',
    availability: 'In Stock',
    badge: 'Best Seller',
    badgeColor: 'bg-green-500',
    image: '/products/daikin.jpeg'
  },
  {
    id: 2,
    brand: 'SAMSUNG',
    name: 'Samsung 1.5 Ton 3 Star Inverter Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Inverter',
    starRating: '4.5',
    reviews: '98',
    price: '₹35,900',
    originalPrice: '₹41,000',
    discount: '12% off',
    availability: 'In Stock',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    image: '/products/lg.jpeg' 
  },
  {
    id: 3,
    brand: 'LG',
    name: 'LG 1.5 Ton 5 Star Dual Inverter Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Dual Inverter',
    starRating: '4.6',
    reviews: '87',
    price: '₹44,000',
    originalPrice: '₹49,990',
    discount: '12% off',
    availability: 'In Stock',
    badge: 'New',
    badgeColor: 'bg-red-500',
    image: '/products/lg.jpeg'
  },
  {
    id: 4,
    brand: 'VOLTAS',
    name: 'Voltas 1.5 Ton 3 Star Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Non-Inverter',
    starRating: '4.3',
    reviews: '64',
    price: '₹32,500',
    originalPrice: '₹36,500',
    discount: '11% off',
    availability: 'In Stock',
    image: '/products/voltas.jpeg'
  },
  {
    id: 5,
    brand: 'HITACHI',
    name: 'Hitachi 2 Ton 5 Star Inverter Split AC',
    capacity: '2 Ton',
    acType: 'Split AC',
    technology: 'Inverter',
    starRating: '4.6',
    reviews: '52',
    price: '₹58,900',
    originalPrice: '₹66,000',
    discount: '11% off',
    availability: 'In Stock',
    image: '/products/daikin.jpeg' 
  },
  {
    id: 6,
    brand: 'O GENERAL',
    name: 'O General 1.5 Ton 5 Star Inverter Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Inverter',
    starRating: '4.7',
    reviews: '46',
    price: '₹62,500',
    originalPrice: '₹70,000',
    discount: '11% off',
    availability: 'In Stock',
    image: '/products/lloyd.jpeg' 
  },
  {
    id: 7,
    brand: 'CARRIER',
    name: 'Carrier 1.5 Ton 3 Star Inverter Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Inverter',
    starRating: '4.4',
    reviews: '38',
    price: '₹37,900',
    originalPrice: '₹42,500',
    discount: '11% off',
    availability: 'In Stock',
    image: '/products/voltas.jpeg' 
  },
  {
    id: 8,
    brand: 'LLOYD',
    name: 'Lloyd 1.5 Ton 3 Star Split AC',
    capacity: '1.5 Ton',
    acType: 'Split AC',
    technology: 'Non-Inverter',
    starRating: '4.2',
    reviews: '31',
    price: '₹31,900',
    originalPrice: '₹35,500',
    discount: '10% off',
    availability: 'In Stock',
    image: '/products/lloyd.jpeg'
  }
];

const FilterSection = ({ title, options }) => (
  <div className="mb-6">
    <h4 className="font-bold text-[#0D2136] mb-3 text-[0.9rem]">{title}</h4>
    <div className="space-y-2">
      {options.map((opt, idx) => (
        <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0284C7] focus:ring-[#0284C7] cursor-pointer" />
          <span className="text-[0.85rem] text-[#475569] group-hover:text-[#0D2136]">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const Store = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState(20000);
  const [maxPrice, setMaxPrice] = useState(150000);
  const [selectedBrand, setSelectedBrand] = useState(location.state?.brand || null);
  const [filteredProducts, setFilteredProducts] = useState(demoProducts);

  useEffect(() => {
    if (location.state?.brand) {
      setSelectedBrand(location.state.brand);
    }
  }, [location.state?.brand]);

  const minGap = 5000;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (maxPrice - value >= minGap) {
      setMinPrice(value);
    } else {
      setMinPrice(maxPrice - minGap);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - minPrice >= minGap) {
      setMaxPrice(value);
    } else {
      setMaxPrice(minPrice + minGap);
    }
  };

  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ''), 10);

  const applyFilters = () => {
    const filtered = demoProducts.filter(product => {
      const price = parsePrice(product.price);
      const matchesPrice = price >= minPrice && price <= maxPrice;
      const matchesBrand = selectedBrand ? product.brand.toUpperCase() === selectedBrand.toUpperCase() : true;
      return matchesPrice && matchesBrand;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [minPrice, maxPrice, selectedBrand]);

  const { handleContactClick } = useContact();

  return (
    <div className="w-full bg-white pb-0">
      {/* Hero Section */}
      <section className="bg-[#EAF5FA] pt-12 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-[45%]">
              <span className="text-[#0284C7] font-bold text-[0.7rem] tracking-widest uppercase mb-4 flex items-center">
                - AC STORE -
              </span>
              <h1 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#0D2136] leading-[1.15] mb-5">
                Top AC Brands <br/><span className="text-[#0284C7]">for Every Need</span>
              </h1>
              <p className="text-[#475569] text-[1.05rem] mb-8 max-w-md leading-relaxed">
                Explore a wide range of air conditioners from trusted brands. Find the right cooling solution for your home, office or commercial space.
              </p>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <ShieldCheck className="w-6 h-6 text-[#0284C7] mr-2 flex-shrink-0" />
                  <span className="text-[0.85rem] font-bold text-[#0D2136] leading-tight">100% Genuine<br/>Products</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-[#0284C7] mr-2 flex-shrink-0" />
                  <span className="text-[0.85rem] font-bold text-[#0D2136] leading-tight">Trusted<br/>Brands</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-[#0284C7] mr-2 flex-shrink-0" />
                  <span className="text-[0.85rem] font-bold text-[#0D2136] leading-tight">Expert<br/>Guidance</span>
                </div>
                <div className="flex items-center">
                  <HeadphonesIcon className="w-6 h-6 text-[#0284C7] mr-2 flex-shrink-0" />
                  <span className="text-[0.85rem] font-bold text-[#0D2136] leading-tight">Support<br/>After Purchase</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[55%] flex justify-end">
              <img src="/products/store-hero.jpg" alt="AC Banner" className="w-full max-h-[350px] object-cover rounded-2xl shadow-xl mix-blend-multiply border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center overflow-x-auto gap-8 no-scrollbar">
            {['DAIKIN', 'SAMSUNG', 'LG', 'VOLTAS', 'HITACHI', 'O GENERAL', 'CARRIER', 'LLOYD'].map((brand, idx) => (
              <span 
                key={idx} 
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                className={`text-xl md:text-2xl font-black tracking-tighter whitespace-nowrap cursor-pointer transition-colors ${selectedBrand === brand ? 'text-[#0284C7]' : 'text-[#0D2136] hover:text-[#0284C7]'}`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: Sidebar + Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[260px] flex-shrink-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#0D2136]">Filters</h3>
              <button className="text-[#0284C7] text-sm font-semibold hover:underline">Clear All</button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <h4 className="font-bold text-[#0D2136] mb-3 text-[0.9rem]">Search Product</h4>
              <div className="relative">
                <input type="text" placeholder="Search AC models..." className="w-full pl-3 pr-10 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:border-[#0284C7]" />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <FilterSection title="Brand" options={['Daikin (12)', 'Samsung (10)', 'LG (8)', 'Voltas (6)', 'Hitachi (5)', 'O General (4)', 'Carrier (4)', 'Lloyd (4)']} />
            <FilterSection title="Capacity" options={['1 Ton (8)', '1.5 Ton (18)', '2 Ton (6)', 'Other (3)']} />
            <FilterSection title="AC Type" options={['Split AC (28)', 'Window AC (5)', 'Commercial AC (2)']} />
            <FilterSection title="Technology" options={['Inverter (22)', 'Non-Inverter (13)']} />
            <FilterSection title="Star Rating" options={['5 Star (14)', '4 Star (10)', '3 Star (8)']} />

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-bold text-[#0D2136] mb-3 text-[0.9rem]">Price Range</h4>
              <div className="relative w-full h-1 bg-gray-200 rounded-full mt-6 mb-4">
                {/* Active Track */}
                <div 
                  className="absolute h-full bg-[#0284C7] rounded-full pointer-events-none" 
                  style={{ 
                    left: `${((minPrice - 20000) / 130000) * 100}%`, 
                    right: `${100 - ((maxPrice - 20000) / 130000) * 100}%` 
                  }}
                ></div>

                {/* Range Inputs */}
                <input 
                  type="range" 
                  min="20000" 
                  max="150000" 
                  step="1000"
                  value={minPrice} 
                  onChange={handleMinChange}
                  className="absolute w-full -top-1.5 h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0284C7] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: minPrice > 130000 ? 5 : 3 }}
                />
                <input 
                  type="range" 
                  min="20000" 
                  max="150000" 
                  step="1000"
                  value={maxPrice} 
                  onChange={handleMaxChange}
                  className="absolute w-full -top-1.5 h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0284C7] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow"
                  style={{ zIndex: 4 }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#64748B] font-medium">
                <span>₹{minPrice.toLocaleString('en-IN')}</span>
                <span>₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <Button onClick={applyFilters} className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3 rounded-xl font-bold shadow-sm border-0 transition-colors">
              Apply Filters
            </Button>
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b border-[#E2E8F0] pb-4">
              <span className="text-[#475569] font-medium text-sm mb-4 sm:mb-0">Showing <span className="font-bold text-[#0D2136]">{filteredProducts.length} Products</span></span>
              <div className="flex items-center text-sm">
                <span className="text-[#64748B] mr-2">Sort by:</span>
                <select className="border border-[#E2E8F0] rounded-lg px-3 py-1.5 bg-white font-medium text-[#0D2136] focus:outline-none focus:border-[#0284C7]">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0284C7] transition-all duration-300 flex flex-col p-5 relative">
                  
                  {/* Badges & Heart */}
                  <div className="flex justify-between items-start mb-4">
                    {product.badge ? (
                      <span className={`${product.badgeColor} text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full`}>
                        {product.badge}
                      </span>
                    ) : <div></div>}
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="h-40 flex items-center justify-center mb-4 p-2 bg-[#F8FAFC] rounded-xl relative group">
                    <img src={product.image} alt={product.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-grow">
                    <span className="text-[0.7rem] font-black text-[#0284C7] tracking-wider mb-1 uppercase">{product.brand}</span>
                    <h3 className="font-extrabold text-[0.95rem] text-[#0D2136] leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                    
                    <div className="flex items-center mb-3">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm font-bold text-[#0D2136] mr-1">{product.starRating}</span>
                      <span className="text-[0.75rem] text-[#64748B]">({product.reviews})</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#F1F5F9] text-[#475569] text-[0.7rem] font-semibold px-2.5 py-1 rounded-md">{product.capacity}</span>
                      <span className="bg-[#F1F5F9] text-[#475569] text-[0.7rem] font-semibold px-2.5 py-1 rounded-md">{product.acType}</span>
                      <span className="bg-[#F1F5F9] text-[#475569] text-[0.7rem] font-semibold px-2.5 py-1 rounded-md">{product.technology}</span>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-2 mt-auto">
                      <span className="text-[1.25rem] font-black text-[#0D2136]">{product.price}</span>
                      <span className="text-[0.8rem] text-[#94A3B8] line-through font-medium">{product.originalPrice}</span>
                      <span className="text-[0.75rem] font-bold text-green-600">{product.discount}</span>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-[0.75rem] text-[#64748B] font-medium">{product.availability}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={`https://www.google.com/search?q=${encodeURIComponent(product.name)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex"
                      >
                        <Button className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-2 rounded-full text-[0.8rem] font-bold border-0 shadow-sm transition-colors">
                          View Details
                        </Button>
                      </a>
                      <Button className="flex-1 bg-white border border-[#0284C7] text-[#0284C7] hover:bg-[#F0F9FF] py-2 rounded-full text-[0.8rem] font-bold transition-colors">
                        Enquire Now
                      </Button>
                    </div>
                  </div>

                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Features Banner */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-12 mt-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <Link to="/contact" className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 border border-[#E2E8F0] group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-all duration-300 group-hover:shadow-md">
                <MessageCircle className="w-6 h-6 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-[#0D2136] text-[0.95rem] mb-1 group-hover:text-[#0284C7] transition-colors duration-300">Free Consultation</h4>
              <p className="text-[0.8rem] text-[#64748B]">Get expert advice for the right AC</p>
            </Link>
            
            <div 
              className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 border border-[#E2E8F0] group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-all duration-300 group-hover:shadow-md">
                <ShieldCheck className="w-6 h-6 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-[#0D2136] text-[0.95rem] mb-1 group-hover:text-[#0284C7] transition-colors duration-300">Genuine Products</h4>
              <p className="text-[0.8rem] text-[#64748B]">100% original from trusted brands</p>
            </div>
            
            <Link to="/book-service" className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 border border-[#E2E8F0] group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-all duration-300 group-hover:shadow-md">
                <Settings className="w-6 h-6 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-[#0D2136] text-[0.95rem] mb-1 group-hover:text-[#0284C7] transition-colors duration-300">Professional Installation</h4>
              <p className="text-[0.8rem] text-[#64748B]">By experienced technicians</p>
            </Link>
            
            <a href="#" onClick={handleContactClick} className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 border border-[#E2E8F0] group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300 group-hover:shadow-md">
                <HeadphonesIcon className="w-6 h-6 text-[#0284C7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-[#0D2136] text-[0.95rem] mb-1 group-hover:text-[#25D366] transition-colors duration-300">After-Sales Support</h4>
              <p className="text-[0.8rem] text-[#64748B]">Always here to help</p>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Store;
