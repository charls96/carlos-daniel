import React from "react";
import GridProjects from "./GridProjects";
import MatrixPill from "./MatrixPill";

const Projects = () => {
  return (
    <div id="projects" className="mt-12 mx-32">
      <h1 className="matrix-text text-8xl text-center after:content-['⚡'] after:absolute after:right-[360px] after:-z-10 after:text-9xl after:opacity-40"><span className="text-9xl">P</span>ROJECT<span className="text-9xl">S</span></h1>
      <div className="flex justify-between items-center my-20 mx-16">
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
            <MatrixPill red={true} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">Full Stack projects</p>
        </div>
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-[10%] duration-200 cursor-pointer grayscale-[30%] hover:grayscale-0">
          <MatrixPill red={false} />
          <p className="mt-6 sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-400">Front End projects</p>
        </div>
      </div>
      <GridProjects type="true" />
    </div>
  );
};

export default Projects;
