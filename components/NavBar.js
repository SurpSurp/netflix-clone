import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-black pr-6">
      <div className="w-24">
        <img src="/logo3.png" alt="logo" />
      </div>
      <div className="flex">
        <AiOutlineSearch className="text-white text-2xl mr-5" />
        <AiOutlineMenu className="text-white text-2xl" />
      </div>
    </nav>
  );
}

export default NavBar;
