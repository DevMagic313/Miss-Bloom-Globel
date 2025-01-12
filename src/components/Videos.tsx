import React from 'react';
import MissBloom1 from '../../video/miss bloom 1.mp4'; // Import the first video
import MissBloom2 from '../../video/miss bloom 2.mp4'; // Import the second video

export default function Videos() {
  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Videos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <video
              className="w-full h-[300px] object-cover rounded"
              controls
              src={MissBloom1} // Use the imported video
            />
            <p className="text-center mt-4 font-medium">Miss Global 2024</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <video
              className="w-full h-[300px] object-cover rounded"
              controls
              src={MissBloom2} // Use the imported video
            />
            <p className="text-center mt-4 font-medium">Miss Bloom Global Highlights</p>
          </div>
        </div>
      </div>
    </section>
  );
}
