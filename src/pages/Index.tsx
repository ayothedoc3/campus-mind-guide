
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            AI Mental Health Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A safe space for students to talk through stress, anxiety, and mental wellness with AI-powered support
          </p>
        </div>
        <ChatInterface />
      </main>
    </div>
  );
};

export default Index;
