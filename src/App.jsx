import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Products from "./components/products";
function App() {
  return (
    <>
      <div className=" scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Products />
      </div>
    </>
  );
}

export default App;
