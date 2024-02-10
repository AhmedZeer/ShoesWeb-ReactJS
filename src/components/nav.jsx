import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icons"
import { navLinks } from "../../constants";

const  Nav = () => {
  return (
      <header className="padding-x py-10 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="\">
            <img 
              width={120}
              height={29}
              alt="Logo"
              src={headerLogo}
            />
          </a>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            { navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-monsterrat 
                  leading-normal text-lg
                  text-slate-gray"
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
