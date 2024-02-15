import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icons"
import { navLinks } from "../../constants";

const  Nav = () => {
  return (
      <header className="bg-slate-900	 padding-x py-10 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="\">
            <img 
              width={120}
              height={29}
              alt="Logo"
              src={headerLogo}
            />
          </a>
          <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
            { navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat 
                  leading-normal text-lg
                  text-gray-50"
                  >
                    {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}

export default Nav;
