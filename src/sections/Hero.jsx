import { bigShoe1 } from "../assets/images"
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
          <span
          className="xl:bg-white
          xl:whitespace-nowrap
          relative z-5 pr-10"
          >check out this shoe</span>
          <br/>
          <span 
          className="text-coral-red
          inline-block mt-3"
          >it looks cool.</span><br/>I guess.
        </h1>
        <p className="font-montserrat
        text-slate-gray text-lg
        leading-8 mt-6 mb-14
        sm:max-w-sm">
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
              <p className="text-4xl font-palanquin
                  font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat
               text-slate-gray font-light">{stat.label}</p>
            </div>
          ))}
        </div>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
      <div className="flex relative
      items-center flex-1 justify-center
      xl:min-h-screen max-xl:py-40 bg-primary
      bg-hero">
        <img className="object-contain relative"
          src = { bigShoe1 }
          alt = "showimage"
          width={610}
          height={500}
          z-10
        />
      </div>
    </section>
  )
}

export default Hero
