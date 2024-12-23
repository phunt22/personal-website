import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';
import Portfolio from './components/Portfolio';
import ForFun from './components/ForFun';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import REV from './components/Projects/Rev'
import HFS from './components/Projects/HFS'
import AlbumWall from './components/ForFunFolder/AlbumWall'
import SOTD from './components/ForFunFolder/SOTD'
import Ripple from './components/Projects/Ripple';
import Kinarow from './components/Projects/Kinarow';
import { ThemeProvider, useTheme } from './ThemeContext';




function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">

          <Routes>
            {/* Landing Page Route (displays multiple sections) */}
            <Route
              path="/"
              element={
                <>
                  <NavBar title={"Hi, I'm Will!"} />
                  <Header />
                  <About />
                  <Tech />
                  <Portfolio />
                  <ForFun />
                </>
              }
            />
            {/* Projects */}
            <Route path='/projects/revdelivery' element={<REV />} />
            {/* <Route path='/projects/shout' element={<Shout />} /> */}
            <Route path='/projects/huddlefantasysports' element={<HFS />} />
            <Route path='/projects/ripple' element={<Ripple />} />
            <Route path='/projects/kinarowbot' element={<Kinarow />} />

            {/* For Fun */}
            <Route path='/forfun/sotd' element={<SOTD />} />
            <Route path='/forfun/albumwall' element={<AlbumWall />} />

          </Routes>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
