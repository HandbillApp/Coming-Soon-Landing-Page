import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Team } from './components/Team';
import { VideoSection } from './components/VideoSection';
import { SubscriptionForm } from './components/SubscriptionForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-red-600/30">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Concept />
        <Team />
        <VideoSection />
        <SubscriptionForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
