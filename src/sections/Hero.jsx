import { useState } from "react"
import { bigShoe1 } from "../assets/images"
import { statistics, shoes} from "../../constants"
import {arrowRight} from "../assets/icons"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShowImg, setBigShowImg] = useState(bigShoe1);
  return (
    <section
      id = "home"
      className="w-full 
     flex xl:flex-row flex-col
     justify-center min-h-screen
     gap-0 max-container">
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start
      w-full max-xl:padding-x ">
        <h1 className="mt-10 font-palanquin font-bold
                      text-8xl max-sm:text-[50px]
                      max-sm:leading-[1]">
          <span
          className="xl:bg-white
          xl:whitespace-nowrap
          relative z-10 pr-10"
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
        <div  className="flex justify-starts items-start
                        flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div>
              <p key={stat.value} className="text-4xl font-palanquin
                  font-bold">{stat.value}</p>
              <p key={stat.label} className="leading-7 font-montserrat
               text-slate-gray font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex relative
      items-center flex-1 justify-center
      xl:min-h-screen max-xl:py-40 bg-primary
      bg-hero">
        <img className="object-contain relative"
          src = { bigShowImg }
          alt = "showimage"
          width={610}
          height={500}
        />
        <div className="flex flex-1 sm:gap-2 absolute
                        -bottom-[5%] sm:left-[23%] max-sm:px-6">
          {shoes.map((shoe,i)=>
          (
            <div key={i}>
              <ShoeCard
                imgURL = {shoe}
                changeBigShowImage=
                {(shoe)=>setBigShowImg(shoe)}
                bigShowImage = {bigShowImg}
              />
            </div>  
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
