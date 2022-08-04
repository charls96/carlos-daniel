import { Buttons } from "../../../pop-os/header/Buttons";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="relative w-[600px] m-auto mt-16">
      <div className="w-[450px]">
        <img
          className="shadow-xl border-[5px] p-1 border-pink-600"
          src={"src/assets/projects/autocarservicemur/autocarservicemur.webp"}
          alt={"Carlos Daniel" + project.title}
        />
      </div>
      <div className="absolute -right-[40px] top-[110px] z-10 cursor-default">
        <p className="text-pink-600 font-bold after:absolute after:left-[25px] w-fit after:top-[1px] after:content-['FEATURED'] after:text-sky-600 after:-z-10 before:content-['📢_']"><span className="text-sky-500">FEATURED </span>PROJECT</p>
      </div>
      <div className="absolute -bottom-[30px] -right-[50px] z-10 rounded shadow-xl bg-slate-800 text-white w-[400px]">
        <div className="border-b border-slate-900 flex items-center justify-between">
          <h3 className="px-4 text-2xl font-bold">{project.title}</h3>
          <Buttons />
        </div>
        <div className="px-4 text-sm">{project.description}</div>
        <div className="flex gap-4 text-lg p-4">
          <IoLogoGithub />
          <IoOpenOutline />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
