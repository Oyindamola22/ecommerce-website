import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/homepage/HomePage';
import MenPage from './components/menpage/MenPage';
import WomenPage from './components/womenpage/WomenPage';
// import NavBar from './components/navbar/NavBar';
// import HomePage from './components/homepage/HomePage';
// import MenPage from './components/men/MenPage';
// import WomenPage from './components/women/WomenPage';
// import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
