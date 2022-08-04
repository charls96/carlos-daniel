import ProjectsData from "./ProjectsData";
import ProjectCard from "./ProjectCard";

const GridProjects = ({ type }: any) => {
  return (
    <div className="relative">
      {ProjectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <div className="cursor-default absolute -left-[400px] top-[220px] w-full z-20 transition-all ease-in-out delay-150 duration-300 hover:-translate-x-10 -rotate-90">
        <div
            className={`text-9xl text-red-500 font-extrabold relative z-10`}
          >
            <p
              className={`after:absolute after:left-[3px] after:top-[1px] after:content-['FULL_STACK'] after:text-red-700 after:-z-10`}
            >
              FULL STACK
            </p>
          </div>
        </div>
    </div>
  );
};

export default GridProjects;
