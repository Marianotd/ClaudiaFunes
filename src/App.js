// CSS
import './scss/styles.css'
// Componentes
import Header from './components/common/Header'
import HeroSection from './components/heroSection/HeroSection';
import SectionContainer from './components/sections/SectionContainer';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header />

      <HeroSection />

      <SectionContainer/>

      <Footer />
    </>
  );
}

export default App;