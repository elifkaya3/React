import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
