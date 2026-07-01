import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <div className="flex items-center gap-3">
          <FaGithub size={35} />
          <h1 className="text-2xl font-bold">
            GitHub Project Explorer
          </h1>
        </div>

        <p className="text-gray-300">
          Explore Open Source Projects
        </p>

      </div>
    </nav>
  );
}

export default Navbar;