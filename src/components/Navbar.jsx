import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16  justify-between">
          <div className="flex flex-1  justify-between">
            <div className="flex flex-shrink-0 ">
              <p className="text-7xl font-semibold text-white">I.E. Nobel</p>
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-5 ">
                <a
                  href="#"
                  className=" bg-[#FBA919] p-3 text-xl font-medium text-white"
                  aria-current="page "
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className=" p-3 text-xl font-medium text-white hover:bg-white hover:text-[#FBA919]"
                >
                  Cursos
                </a>
                <a
                  href="#"
                  className=" p-3 text-xl font-medium text-white hover:bg-white hover:text-[#FBA919]"
                >
                  Docentes
                </a>
                <a
                  href="#"
                  className=" p-3 text-xl font-medium text-white hover:bg-white hover:text-[#FBA919]"
                >
                  Contactos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-[#FBA919]">
          <a
            href="#"
            className="block  bg-white px-3 py-2 text-base font-medium text-[#FBA919]"
            aria-current="page"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block  px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-[#FBA919]"
          >
            Cursos
          </a>
          <a
            href="#"
            className="block  px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-[#FBA919]"
          >
            Docentes
          </a>
          <a
            href="#"
            className="block  px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-[#FBA919]"
          >
            Contactos
          </a>
        </div>
      </div>
    </nav>
  );
};
