import {
  IoRemoveOutline,
  IoCaretUpOutline,
  IoCaretDownOutline,
  IoCloseOutline,
} from "react-icons/io5";
export const Buttons = () => {
  return (
    <div className="flex justify-end gap-2">
      <div className="bg-amber-500 w-4 h-4 rounded-full text-center font-extrabold text-transparent hover:first:text-gray-700">
        <IoRemoveOutline />
      </div>
      <div
        onClick={() => {
          window.resizeBy(screen.width, screen.height);
        }}
        className="relative bg-green-500 w-4 h-4 rounded-full text-transparent  hover:odd:text-gray-700 hover:even:text-gray-700"
      >
        <IoCaretUpOutline className="h-[0.5rem] w-[0.5rem] rotate-45 absolute left-[0.35rem] top-[0.15rem]" />
        <IoCaretDownOutline className="h-[0.5rem] w-[0.5rem] rotate-45 absolute right-[0.35rem] top-[0.35rem]" />
      </div>
      <div
        onClick={() => window.close()}
        className="bg-red-500 w-4 h-4 rounded-full text-transparent hover:odd:text-gray-700"
      >
        <IoCloseOutline />
      </div>
    </div>
  );
};
