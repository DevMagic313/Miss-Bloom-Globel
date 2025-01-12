import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Mabel Boamah, Founder of Miss Bloom Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            '../../img/founder 1.jpeg',
            '../../img/founder 2.jpeg',
            '../../img/founder 3.jpeg'
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Mabel Boamah"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div className="prose lg:prose-xl mx-auto">
          <p className="mb-4">
            As the founder of Miss Bloom Global, Mabel Boamah is a 28-year-old Ghanaian Actress and TV Advertiser.She hails from the Western North region of Ghana and currently lives in Greater Accra with her husband and kids. Mabel is a passionate advocate for women's empowerment and cultural exchange. With a strong background in event management and marketing, she has brought together a team of dedicated professionals to create a unique and enriching experience for contestants and audiences alike.
          </p>
          <p className="mb-4">
            Mabel Boamah's vision for Miss Bloom Global is to create a platform that celebrates the diversity and beauty of women from around the world, while providing opportunities for personal growth, cultural exchange, and community engagement.
          </p>

          <h3 className="font-bold mt-6 mb-4">Miss Bloom Global Aims To:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Empower women to become confident leaders and change-makers in their communities.</li>
            <li>Promote cultural understanding and exchange between nations.</li>
            <li>Provide a platform for women to share their stories, talents, and passions with a global audience.</li>
          </ul>

         
        </div>
      </div>
    </section>
  );
}
