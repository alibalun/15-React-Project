import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Cities from "./pages/Cities/Cities";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import { Routes, Route } from 'react-router-dom';
import GalleryBg from './components/GalleryBg/GalleryBg';

import { useState, createContext } from 'react';

const RoutesContext = createContext();

function App() {
  let [opened, setOpened] = useState(false);
  let [infobox, setInfobox] = useState({});
  return (
    <>
      <div className="App">
        <Navbar />
        <RoutesContext.Provider value={{ opened, setOpened, infobox, setInfobox }}>
          {opened && <GalleryBg />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </RoutesContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
export { RoutesContext };