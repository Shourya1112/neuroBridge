import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './globalComponents/Navbar/NavBar';
import Footer from './globalComponents/Footer/Footer';
import mainBackground from "./assets/background/appBackground.png"

function App() {
  return (
    <div className="App">

        <img 
          src={mainBackground} 
          className='main-background' 
          alt='background' 
        />

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>

        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
