import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Recruitment from './components/Recruitment';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main>
        <About />
        <Recruitment />
        <Gallery />
        <Achievements />
        <Goals />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;