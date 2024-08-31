import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Brands We Love</h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore tempor sed do magna aliqua.</p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <li key={num} className="relative aspect-square">
              <Image
                fill
                className="object-cover"
                src={`/images/brands/${num}.jpg`}
                alt={`Brand ${num}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Brands;