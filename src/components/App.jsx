import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import routes from '../utils/routes.js';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Carousel from './Carousel.jsx';
import Services from './Services.jsx';
import Video from './Video.jsx';
import Team from './Team.jsx';
import Footer from './Footer.jsx';
import BookingWidget from './BookingWidget.jsx';
// import ScrollToTop from './ScrollToTop.jsx';

const Main = () => (
  <>
    <Header />
    <Video />
    <Services />
    <Carousel />
    <Footer />
    <BookingWidget />
  </>
);

const App = () => (
  <Router>
    <div className="d-flex flex-column h-100">
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        <Route path={routes.mainPage} element={<Main />} />
        <Route path={routes.teamPage} element={<Team />} />
      </Routes>
    </div>
  </Router>
);

export default App;
