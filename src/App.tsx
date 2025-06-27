import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import DriverLogin from './components/DriverLogin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';

// Home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Solutions />
      <Benefits />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;