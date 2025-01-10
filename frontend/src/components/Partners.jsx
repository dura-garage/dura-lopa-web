// src/components/Partners.js
import React from "react";

const partners = [
  {
    name: "दुरा सेवा समाज",
    logo: "/images/partners/dura_sewa_samaj.png",
    website: "https://dura-student-society.onrender.com/",
  },
  {
    name: "दुरा विद्यार्थी समाज",
    logo: "/images/partners/dura_students_society.jpg",
    website: "https://dura-student-society.onrender.com/",
  },
  {
    name: "भाषा आयोग",
    logo: "/images/partners/Emblem_of_Nepal_bhasa_aayog.png",
    website: "https://languagecommission.gov.np/",
  },
];

export default function Partners() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Supported By
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
