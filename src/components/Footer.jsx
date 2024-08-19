import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#333] py-5">
      <div className="text-center">
        <div className="flex flex-row justify-center gap-7 text-white text-3xl pb-3">
          <FaFacebook /> <FaTwitter />
          <FaInstagram /> <FaLinkedinIn />
        </div>
        <p className="text-white">
          © I.E. Nobel 2016 - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};
