import { services } from "../../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="flex max-container justify-center 
                        items-center gap-6 flex-wrap ">
        {services.map((service, i)=>(
          <ServiceCard key={service.label} {...service}/>
        ))}
    </section>
  )
}

export default Services
