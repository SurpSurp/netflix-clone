import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-2 pr-3 pl-1 z-10 -mb-40 bg-black bg-opacity-30">
      <div className="w-12 opacity-90">
        <img src="/logo5.png" alt="logo" />
      </div>
      <div className="">
        <AiOutlineSearch className="text-white text-2xl" />
      </div>
    </nav>
  );
}

export default NavBar;
