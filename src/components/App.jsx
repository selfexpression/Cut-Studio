import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Gallery from './Gallery.jsx';
import Services from './Services.jsx';
import Video from './Video.jsx';
import Team from './Team.jsx';
import Info from './Info.jsx';
import BookingWidget from './BookingWidget.jsx';

const Main = () => (
  <>
    <Header />
    <Video />
    <Services />
    <Gallery />
    <Info />
    <BookingWidget />
  </>
);

const App = () => (
  <Router>
    <div className="d-flex flex-column">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  </Router>
);

export default App;
