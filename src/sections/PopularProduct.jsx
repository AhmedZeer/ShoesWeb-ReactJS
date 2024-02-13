import { ProductCards } from '../components/ProductCards'
import { products } from '../../constants/'

const PopularProduct = () => {
  return (
    <section id="products" className='max-container max-sm:mt-10
    '>
      <div className='flex flex-col justify-start gap-2'>
        <h2 className='text-4xl font-palanquin font-bold'>
                      How about these <span className='text-coral-red'>shoes?</span></h2>

        <p className='text-lg lg:max-w-lg font-palanquin text-slate-gray'
        >Pretty cool yeah I know.</p>
      </div>
      <div className='mt-10 grid lg:grid-cols-4
                      md:grid-cols-3 sml:grid-cols-2
                      sm:gap-4 lg:gap-10'>
      {products.map((card)=>(
        <ProductCards key={card.imgURL} {...card}/>
      ))}
      </div>
    </section>
  )
}

export default PopularProduct

