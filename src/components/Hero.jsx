import React from "react";
import bg from "../assets/banner1.jpg";

export const Hero = ({ children }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}

      <div className="text-center pt-72  text-gray-900">
        <div className="bg-orange-300 sm:mx-[18%] ">
          <p className="text-7xl py-3 text-gray-900 ">
            La Mejor Educación del Mundo
          </p>
          <p className="text-4xl py-3 text-gray-900 ">
            Estudia con nosotros y alcanza tus sueños!!
          </p>
        </div>
      </div>
    </div>
  );
};
