import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Programs from './components/Programs';
import HealthAssessment from './components/HealthAssessment';
import SuccessStories from './components/SuccessStories';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Programs />
            <HealthAssessment />
            <SuccessStories />
            <PricingPlans />
            <Footer />
        </div>
    );
}

export default App;
