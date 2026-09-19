import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Store from './pages/Store';
import BookService from './pages/BookService';
import About from './pages/About';
import Contact from './pages/Contact';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
    <Router>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="ac-store" element={<Store />} />
            <Route path="book-service" element={<BookService />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ContactProvider>
    </Router>
  );
}

export default App;
