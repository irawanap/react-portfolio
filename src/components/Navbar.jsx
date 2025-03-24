import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/irawanajipangestu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-purple-800 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/irawanap" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-purple-800 transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/irawanap18" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-purple-800 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;