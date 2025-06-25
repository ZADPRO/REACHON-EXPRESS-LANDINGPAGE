import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../01-Home/Home";
import Header from "../00-Header/Header";
import Footer from "../05-Footer/Footer";
import About from "../02-About/About";
import Contact from "../03-Contact/Contact";
import DeleteAccount from "../06-DeleteAccount/DeleteAccount";
import PrivacyPolicy from "../07-PrivacyPolicy/PrivacyPolicy";

const MainRoutes: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/deleteAccount" element={<DeleteAccount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MainRoutes;
