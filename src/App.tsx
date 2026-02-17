import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import PassionSection from './components/PassionSection';
import GallerySection from './components/GallerySection';
import VoicesSection from './components/VoicesSection';
import FlowSection from './components/FlowSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FixedCTAButton from './components/FixedCTAButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <PassionSection />
        <GallerySection />
        <VoicesSection />
        <FlowSection />
        <CTASection />
      </main>
      <Footer />
      <FixedCTAButton />
    </div>
  );
}

export default App;
