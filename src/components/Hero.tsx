import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Business Through
            <span className="block mt-2">Blockchain Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Expert consulting in Web3, blockchain development, and digital transformation
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}