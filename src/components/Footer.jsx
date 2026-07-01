import { FaGithub, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <FaGithub size={24} />
          <h2 className="text-lg font-semibold">
            GitHub Project Explorer
          </h2>
        </div>

        <p className="text-gray-400 mt-3 md:mt-0">
          Developed by <span className="font-semibold text-white">Unnati Negi</span>
        </p>

        <p className="flex items-center gap-2 text-gray-400 mt-3 md:mt-0">
          Made with <FaHeart className="text-red-500" /> using React & GitHub API
        </p>
      </div>
    </footer>
  );
}

export default Footer;