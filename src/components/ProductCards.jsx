import {star} from "../assets/icons"

export const ProductCards = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
        <img className = "w-[280px] h-[280px]" src = {imgURL}/>
        <div className="flex justify-start gap-2.5 mt-3">
            <img src={star} width={24} height={24} alt="star"/>
            <p className="font-montserrat leading-normal
                          text-l text-slate-gray">(5)</p>
        </div>
        <h3 className="mt-2 text-xl font-palanquin font-semibold leading-normal">
            {name}
        </h3>
        <p className="font-montserrat text-coral-red font-2lx
                    font-semibold leading-normal">
            {price}
        </p>
    </div>
  )
}
