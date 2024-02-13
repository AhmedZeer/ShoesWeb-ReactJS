import Button from "../components/Button"
import { offer } from "../assets/images"

const Offer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse
                        gap-10 max-container">

      <div className="flex-1">
        <img src={offer} alt="offer"
        width={773} height={687}
        className="object-contain w-full" />
      </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize font-senibold
                        text-8xl lg:max-w-lg">
            awesome products
            <span> just for </span>
            <span className="text-coral-red">you.</span><br/>
          </h2>
          <p className="mt-4 info-text lg:max-w-sm">
            this is the best description
            ever to put on a hero for 
            your website xd. this is the best description
            ever to put on a hero for 
            <br/>
            blah alashdfihblah alsdfhsadf
            apsdiaaaaaaaaaa frontendci olmayin olmm
          </p>
          <div className="flex flex-1 gap-5 mt-5">
            <Button label="انقر هنا"/>
            <Button bgColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                   label="Tıkla işte."/>
          </div>
        </div>
    </section>
  )
}

export default Offer
