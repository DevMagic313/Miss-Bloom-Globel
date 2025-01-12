import React from 'react';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-purple-600 mr-3" />
              <p className="text-lg">
                Appointing Patience Bumbom as the queen to represent Miss Bloom Global 2024, embodying the values of our 
                organization and serving as a role model for young women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}