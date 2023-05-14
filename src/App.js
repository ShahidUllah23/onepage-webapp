import React from 'react';
import Header from './components/Header';
import Features from "./components/Features";
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Contacts from './components/Contacts';


function App() {
  return (
    <div className='App'>
      <Header />
      <Features />
      <About image = {aboutimage} title="Comes With All You Need For Daily Life" button="Get The App"/>
      <Presentation />
      <About image = {aboutimage1} title="Download And Get The App Now" button="Download"/>
      <Contacts />
    </div>
  )
}

export default App;