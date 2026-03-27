import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTrust from './components/BrandTrust';
import Collection from './components/Collection';
import OfferBanner from './components/OfferBanner';
import BookingForm from './components/BookingForm';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import FeaturedBrands from './components/FeaturedBrands';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandTrust />
        <Collection />
        <OfferBanner />
        <BookingForm />
        <Experience />
        <Testimonials />
        <FeaturedBrands />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
