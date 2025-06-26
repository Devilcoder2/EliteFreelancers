import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurWork from './components/OurWork';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonals';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <WhyUs />
      <OurWork />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;