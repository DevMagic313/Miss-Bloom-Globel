import React from "react";
import missBloom1 from "../../img/miss bloom 1.jpeg";
import missBloom2 from "../../img/miss bloom 2.jpeg";
import missBloom3 from "../../img/miss bloom 3.jpeg";
import missBloom4 from "../../img/miss bloom 4.jpeg";
import missBloom5 from "../../img/miss bloom 5.jpeg";
import missBloom6 from "../../img/miss bloom 6.jpeg";

const images = [
  { src: missBloom4 },
  { src: missBloom5 },
  { src: missBloom6 },
  { src: missBloom1 },
  { src: missBloom2 },
  { src: missBloom3 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
            >
              <img
                src={image.src}
                alt={`Miss Bloom Event ${index + 1}`}
                className="w-full h-81 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-2">
                <p className="text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Meet Our Queen: Patience Bumbom
          </h2>
          <img
            src={missBloom2}
            alt="Patience Bumbom"
            className="w-64 h-64 object-contain rounded-lg shadow-lg mb-8 mx-auto"
            loading="lazy"
          />
          <div className="prose lg:prose-xl">
            <p className="mb-4">
              We are thrilled to announce that Patience Bumbom has been
              appointed as the queen to represent Miss Bloom Global 2024. This
              talented and beautiful individual embodies the values of our
              organization, and we are confident that she will make a lasting
              impact as our ambassador.
            </p>
            <h3 className="font-bold mt-6">About Patience Bumbom</h3>
            <p>
              Patience Bumbom is a 23-year-old Ghanaian lady studying at the
              University of Media Arts and Communication - Institute of
              Journalism. Singing and acting are her hobbies. With her
              captivating smile, charming personality, and passion for helping
 girls' education, Patience is the perfect representative for Miss
              Bloom Global.
            </p>
            <blockquote className="italic border-l-4 border-purple-500 pl-4 my-6">
              "I am honored and humbled to be appointed as the queen of Miss
              Bloom Global 2024. I promise to dedicate myself to promoting the
              values of our organization and making a positive impact on the
              lives of others. Thank you for this incredible opportunity!"
              <footer className="text-right">- Patience Bumbom</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
