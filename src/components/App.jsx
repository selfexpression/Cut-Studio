import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Team from './Team.jsx';
import Contacts from './Contacts.jsx';

const App = () => (
  <div className="d-flex flex-column">
    <NavBar />
    <Header />
    <About />
    <Services />
    <Team />
    <Contacts />
  </div>
);

export default App;
