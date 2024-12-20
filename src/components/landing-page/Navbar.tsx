import { MenuIcon, Workflow } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className=" bg-black">
          <div className="py-4 flex items-center justify-between">
            <a href="/" className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
              <Workflow className="h-10 w-10 inline-flex justify-center items-center rounded-lg" />
            </a>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="h-6 w-6" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="https://github.com/chiragagg5k/flow-forge"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-white py-2 px-4 rounded-lg text-black">
                  Visit our GitHub
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
