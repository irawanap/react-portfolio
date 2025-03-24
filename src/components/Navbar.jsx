import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-2">
        <div className="flex flex-shrink-0 items-center">
            {/* <h1 className="text-2xl py-4 text-slate-100">Ia</h1> */}
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar;