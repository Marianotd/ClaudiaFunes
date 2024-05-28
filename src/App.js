// CSS
import './scss/styles.css'
// Componentes
import Header from './components/common/Header'
import HeroSection from './components/heroSection/HeroSection';
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HeroSection />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;