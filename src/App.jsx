import React, { useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'
import ReactGA from "react-ga4";

import HomePage from './components/Home/HomePage';
import WeatherMe from './components/WheatherMe_App/WeatherMe';
import VisitingCard from './components/VisitingCard/VisitingCard';
import ProductCatalog from './components/Product_Catalogue/ProductCatalog';
import TrackMyCash from './components/TrackMyCash/TrackMyCash';
import CaseStudy from './components/CaseStudies/CaseStudy';

ReactGA.initialize("G-XXXXXXXXXX");
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

const AppContent = () => {
  const location = useLocation();
  usePageTracking();

  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Gaurav Mahavar | Web Developer';
    } else if (location.pathname === '/WheatherMe') {
      document.title = 'WeatherMe';
    } else if (location.pathname === '/BussinessCardGenerator') {
      document.title = 'Business Card Generator';
    } else if (location.pathname === '/ProductCatalogue') {
      document.title = 'Product Catalogue';
    }else if (location.pathname === '/TrackMyCash') {
      document.title = 'Track My Cash';
    }
  }, [location.pathname]); // ✅ rerun when path changes

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-primary-950 text-gray-800 dark:text-gray-200">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WheatherMe" element={<WeatherMe />} />
        <Route path="/BussinessCardGenerator" element={<VisitingCard />} />
        <Route path="/ProductCatalogue" element={<ProductCatalog />} />
        <Route path="/TrackMyCash/*" element={<TrackMyCash />} />
        <Route path="/CaseStudy/*" element={<CaseStudy />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;
