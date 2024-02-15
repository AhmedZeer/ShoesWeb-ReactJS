import Footer from "./sections/Footer.jsx"
import Hero from "./sections/Hero.jsx"
import NewProduct from "./sections/NewProduct.jsx"
import Offer from "./sections/Offer.jsx"
import PopularProduct from "./sections/PopularProduct.jsx"
import Subscribe from "./sections/Subscribe.jsx";
import Services from "./sections/Services.jsx"
import Reviews from "./sections/Reviews.jsx"
import Nav from "./components/nav.jsx"

const App = () => (
  <main className = "relevant">

    <Nav />

    <section className = "xl: padding-1 wide:padding-r padding-b">
      <Hero />
    </section>

    <section className = "padding">
      <PopularProduct />
    </section>

    <section className = "padding">
      <NewProduct />
    </section>

    <section className = "padding">
      <Services />
    </section>

    <section className = "padding">
      <Offer />
    </section>

    <section className = "padding bg-pale-blue">
      <Reviews />
    </section>

    <section className = "padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className = "padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>

  </main>
);

export default App;
