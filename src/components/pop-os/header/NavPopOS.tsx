import { useEffect, useRef, useState } from "react";
import {
  IoEarthOutline,
  IoConstructOutline,
  IoCode,
  IoNewspaperOutline,
  IoChatbubblesOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import MobileNavPopOS from "./MobileNavPopOS";

const NavPopOS = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const buttonMobileNavRef = useRef<any>();
  const mobileNavRef = useRef<any>();

  useEffect(() => {
    const closeMobileNav = (e: any) => {
      if (
        !e.path.includes(buttonMobileNavRef.current) &&
        !e.path.includes(mobileNavRef.current)
      ) {
        setOpenMobileNav(false);
      }
    };
    document.body.addEventListener("click", closeMobileNav);

    return () => document.body.removeEventListener("click", closeMobileNav);
  }, []);

  return (
    <div className="ml-4 flex gap-6 text-gray-400 text-lg">
      <button className="flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoEarthOutline /> Home
        </span>
      </button>
      <button className="hidden sm:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoConstructOutline /> Experience
        </span>
      </button>
      <button className="hidden md:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoCode /> Projects
        </span>
      </button>
      <button className="hidden md:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoChatbubblesOutline /> Contact
        </span>
      </button>
      <button className="hidden lg:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          <IoNewspaperOutline /> Resume
        </span>
      </button>
      <button className="hidden lg:flex items-center border-b-2 border-transparent focus:border-b-2 focus:border-gray-300 focus:text-gray-300">
        <span className="flex items-center gap-1 px-2 py-0.5 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-200 rounded-lg transition ease-in-out">
          🍥 My anime
        </span>
      </button>
      <div ref={buttonMobileNavRef}
        onClick={() => setOpenMobileNav(!openMobileNav)}
        className="relative lg:hidden flex items-center cursor-pointer"
      >
        <IoEllipsisHorizontal className="text-3xl hover:text-gray-200" />
        <MobileNavPopOS
          openMobileNav={openMobileNav}
          mobileNavRef={mobileNavRef}
        />
      </div>
    </div>
  );
};

export default NavPopOS;
