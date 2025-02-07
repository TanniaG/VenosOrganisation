import { useState } from "react";
import educationImg from "./Images/school.jpg";
import inspireImg from "./Images/albino.jpg";
import povertyImg from "./Images/xmas.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLightbulb, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const causes = [
  {
    title: "Education Empowerment",
    image: educationImg,
    description:
      "We believe that education is the key to breaking the cycle of poverty and empowering individuals for a brighter future.",
    icon: faGraduationCap,
  },
  {
    title: "Inspiring Change",
    image: inspireImg,
    description:
      "Through advocacy and community initiatives, we inspire individuals to take action and create lasting change.",
    icon: faLightbulb,
  },
  {
    title: "Breaking the Poverty Cycle",
    image: povertyImg,
    description:
      "Our programs focus on providing resources and opportunities that help communities lift themselves out of poverty.",
    icon: faHandHoldingHeart,
  },
];

export default function CausesSection() {
  return (
    <div id="causes" className="relative container mx-auto px-4 py-4 bg-amber-50">
      <h2 className="text-4xl font-bold text-center text-zinc-800 mb-8">Our Causes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {causes.map((cause, index) => (
          <div key={index} className="relative group">
            <h3 className="absolute top-4 left-4 text-2xl font-semibold text-white bg-black bg-opacity-60 px-3 py-1 rounded-md z-10">
              <FontAwesomeIcon icon={cause.icon} className="mr-2" />
              {cause.title}
            </h3>
            <img
              src={cause.image}
              alt={cause.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="mt-2 text-sm">{cause.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
