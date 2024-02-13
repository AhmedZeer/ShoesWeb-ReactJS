const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full
                    rounded-[20px] shadow-3xl px-10 py-16
                    bg-slate-50" >
        <div className="bg-coral-red rounded-full flex justify-center
                        items-center w-11 h-11" >
          <img src={imgURL} height={24} width={24} />
        </div>
        <h3 className="mt-5 leading-normal font-montserrat text-2xl 
        font-semibold" >
            {label}
        </h3>
        <h3 className="break-words font-palanquin leading-normal
                        mt-2 text-md text-slate-gray"> {subtext} </h3>
    </div>
  )
}

export default ServiceCard;