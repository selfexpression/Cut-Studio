import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Gallery from './Gallery.jsx';
import Services from './Services.jsx';
import Team from './Team.jsx';
import Contacts from './Contacts.jsx';
import ParallaxMirror from './ParallaxMirror.jsx';

const App = () => (
  <div className="d-flex flex-column">
    <NavBar />
    <Header />
    <ParallaxMirror />
    <Services />
    <Team />
    <Gallery />
    <Contacts />
  </div>
);

export default App;
