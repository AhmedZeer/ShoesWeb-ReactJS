import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const NewProduct = () => {
  return (
        <section className="flex justify-between 
                            items-center max-lg:flex-col 
                            gap-10 w-full max-container">
          <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin capitalize font-bold
                          text-4xl lg:max-w-lg">
              awesome products
              <span> just for </span>
              <span className="text-coral-red">you.</span><br/>
            </h2>
            <p className="mt-4 info-text lg:max-w-sm">
              this is the best description
              ever to put on a hero for 
              your website xd.
            </p>
            <div className="mt-5">
              <Button label="Click"/>
            </div>
          </div>

          <div className="flex flex-1 justify-center
                          items-center">
            <img src={shoe8}
                  alt="shoe"
                  width={570}
                  height={522}
                  className="object-contain"
            />
          </div>
        </section>
  )
}

export default NewProduct
