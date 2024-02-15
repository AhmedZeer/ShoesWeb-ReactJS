import { star } from "../assets/icons"

function ReviewCard({imgURL, customerName, rating, feedback}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt={customerName}
        className="w-[100px] rounded-full object-cover h-[100px]" />
        <p className="mt-6 max-w-sm text-center font-palanquin text-slate-gray">{feedback}</p>

        <div className="mb-3 flex-1 flex justify-center gap-2 items-center">
            <h3 className="font-montserrat font-bold text-xl">
                {customerName}
            </h3>

            <img src={star} alt="star" height={20} width={20}/>
            <p className="font-montserrat font-light text-slate-gray">({rating})</p>
        </div>
    </div>
  )
}

export default ReviewCard