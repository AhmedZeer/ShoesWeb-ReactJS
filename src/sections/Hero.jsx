import { statistics } from "../../constants"
import {arrowRight} from "../assets/icons"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section
      id = "home"
      className="w-full border-2
     flex xl:flex-row flex-col
     justify-center min-h-screen
     gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start
      w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin font-bold
                      text-8xl max-sm:text-[50px]
                      max-sm:leading-[1]">
          <span>Best title </span>
          <br/>
          <span>EVER.</span>
        </h1>
        <p>
          this is the best description
          ever to put on a hero for 
          your website xd.
        </p>
        <Button label = "Show Now"
        iconURL = {arrowRight}/>
        <div className="flex justify-starts items-start
                        flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    </section>
  )
}

export default Hero
