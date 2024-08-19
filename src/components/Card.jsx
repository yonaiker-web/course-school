import React from "react";
import finanzas from "../assets/master/finanzas.jpg";
import hacking from "../assets/master/hacking.jpg";
import diseño from "../assets/master/diseño.jpg";

const cards = [
  {
    title: "Maestría en Finanzas",
    img: finanzas,
    description:
      "Profundiza en los conceptos y herramientas financieras para tomar decisiones estratégicas en el mundo de los negocios. Aprenderás sobre inversión, análisis financiero, mercados financieros y gestión de riesgos.",
  },
  {
    title: "Maestría en Hacking Ético",
    img: hacking,
    description:
      "Desarrolla las habilidades necesarias para identificar y explotar vulnerabilidades en sistemas informáticos de manera ética. Aprenderás a realizar pruebas de penetración, analizar riesgos y diseñar estrategias de seguridad proactivas. Con esta maestría, podrás proteger a organizaciones de ciberataques y convertirte en un experto en seguridad informática.",
  },
  {
    title: "Maestría en Diseño Gráfico",
    img: diseño,
    description:
      "Perfecciona tus habilidades creativas y técnicas en el diseño visual. Aprenderás a crear diseños impactantes para diversas plataformas y medios, utilizando software especializado.",
  },
];

export const Card = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 text-center sm:px-0 sm:py-10  lg:px-36 lg:py-12 ">
      {cards.map(({ title, description, img }, key) => (
        <div className=" basis-1/4 bg-[#FBA919] p-5 " key={key}>
          <img src={img} alt="card" className="pb-4" />
          <p className="text-2xl pb-3 ">{title}</p>
          <p className="text-justify	">{description}</p>
        </div>
      ))}
    </div>
  );
};
