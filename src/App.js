// CSS
import './scss/styles.css'
// Componentes
import Header from './components/common/Header'
import HeroSection from './components/heroSection/HeroSection';
import SectionContainer from './components/sectionsContainer/SectionContainer';
import Footer from './components/common/Footer';

function App() {
  return (
    <main>
      <Header />

      <HeroSection />

      <SectionContainer />

      <Footer />
    </main>
  );
}

export default App;