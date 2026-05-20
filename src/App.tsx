import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToHash from '@/components/ScrollToHash';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WhatWeFix from '@/pages/WhatWeFix';
import BusinessIntelligence from '@/pages/BusinessIntelligence';
import AdCreation from '@/pages/AdCreation';
import Development from '@/pages/Development';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';
import Stub from '@/pages/Stub';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/business-intelligence"
            element={<BusinessIntelligence />}
          />
          <Route path="/products/ad-creation" element={<AdCreation />} />
          <Route
            path="/products/investing"
            element={<Stub title="Investing App" />}
          />
          <Route path="/products/development" element={<Development />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-fix" element={<WhatWeFix />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
