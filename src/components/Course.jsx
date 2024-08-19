import React from "react";
import marketing from "../assets/marketing.jpg";
import leyes from "../assets/leyes.jpg";
import seguridad from "../assets/seguridad.jpg";
import economia from "../assets/Economia.jpg";

const cards = [
  {
    title: "Marketing",
    img: marketing,
    description:
      "Adquiere conocimientos sobre las estrategias y tácticas para promocionar productos o servicios y alcanzar los objetivos de una empresa. Aprenderás sobre investigación de mercado, branding, publicidad, marketing digital y análisis de datos.",
  },
  {
    title: "Leyes",
    img: leyes,
    description:
      "Obtén una base sólida en el marco legal aplicable a diversas áreas, como derecho comercial, laboral, civil o penal. Ideal para quienes desean comprender las implicaciones legales de sus decisiones o ejercer una profesión jurídica.",
  },
  {
    title: "Seguridad de la Información",
    img: seguridad,
    description:
      " Aprende a proteger la información confidencial de una organización de amenazas cibernéticas. Cubrirás temas como seguridad de redes, gestión de riesgos, protección de datos personales y respuesta a incidentes.",
  },
  {
    title: "Economía",
    img: economia,
    description:
      "Explora los principios fundamentales de la economía y cómo funcionan los sistemas económicos. Aprenderás sobre microeconomía, macroeconomía, política económica y análisis de datos económicos.",
  },
];
export const Course = () => {
  return (
    <div>
      <p className="text-[#FBA919] text-center text-7xl py-5">
        Nuestros Cursos
      </p>

      <div class="grid  sm:grid-cols-1 lg:grid-cols-2 gap-20 text-center lg:px-36 lg:py-12 sm:px-10 sm:py-10 ">
        {cards.map(({ title, description, img }, key) => (
          <div class=" basis-1/4  relative" key={key}>
            <div className="">
              <img src={img} alt="card" className="min-w-[200px]" />

              <div className="absolute top-0 left-0 text-white text-left p-5 bg-[#00000066]  w-[60%] h-full">
                <p className="sm:text-2xl  md:text-3xl text-[1rem] pb-3">
                  {title}
                </p>
                <p className="sm:text-base md:text-xl text-[0.7rem]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
