// src/components/Partners.js
import React from "react";

const partners = [
  {
    name: "Partner 1",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    website: "https://partner1.com", // Replace with actual website URL
  },
  {
    name: "Partner 2",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    website: "https://partner2.com", // Replace with actual website URL
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    website: "https://partner3.com", // Replace with actual website URL
  },
];

export default function Partners() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
