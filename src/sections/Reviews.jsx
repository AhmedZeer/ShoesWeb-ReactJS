import { reviews } from "../../constants";
import ReviewCard from "../components/ReviewCard";
const Reviews = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-4xl font-bold">
        Geniune Customer Reviews </h1>
        <p className="italic m-auto mt-4 max-w-lg 
        text-center text-slate-gray text-md">
          these are random generated answers.
          Lies, lies and lies nothing else. 
          Lies, lies and lies nothing else. 
          Lies, lies and lies nothing else. 
          Lies, lies and lies nothing else. 
          Lies, lies and lies nothing else. 
        </p>
      </div>
      <div className="mt-10 flex flex-1 justify-center items-center" >
        {
          reviews.map((review)=>(
            <ReviewCard  key = {review.customerName} {...review}
            />
          ))
        }

      </div>
    </section>
  )
}

export default Reviews;
