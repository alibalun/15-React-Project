import { useState, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.index';
import NoteContainer from './components/NoteContainer/NoteContainer.index';

let ThemeContext = createContext();

function App() {
  let [darkTheme, setDarkTheme] = useState(false);
  return (
    <div style={{height:'100vh',backgroundColor:darkTheme ? 'black' : 'white'}}>
      <div className="App-container" style={{ color: darkTheme ? 'white' : 'black', backgroundColor: darkTheme ? 'black' : 'white' }}>
        <div className="App">
          <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <Navbar />
          </ThemeContext.Provider>
          <NoteContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
export { ThemeContext };