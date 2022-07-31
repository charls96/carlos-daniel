import React from "react";
import MatrixPill from "./MatrixPill";

const Projects = () => {
  return (
    <div id="projects" className="mt-12">
      <h1 className="matrix-text text-5xl text-center"><span className="text-6xl">P</span>ROJECT<span className="text-6xl">S</span></h1>
      <div className="flex justify-around items-center my-20">
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0 hover:text-pink-600">
            <MatrixPill red={true} />
          <p className="mt-6 sm:text-xl">Full Stack projects</p>
        </div>
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0 hover:text-pink-600">
          <MatrixPill red={false} />
          <p className="mt-6 sm:text-xl">Front End projects</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
