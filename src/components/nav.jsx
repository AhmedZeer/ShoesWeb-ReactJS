import {header_logo} from "../assets/images"
import {hamburger} from "../assets/icons"

const  Nav = () => {
  return (
      <header>
        <nav>
          <img href="/"
            src = {header_logo}
            width={120}
            height={29}
          />
        </nav>
      </header>
    )
}

export default Nav;
