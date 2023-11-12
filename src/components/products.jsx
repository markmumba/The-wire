import router from "../assets/images/router.png";
import switche from "../assets/images/switch.png";
import rack from "../assets/images/rack.png";
import ethernet from "../assets/images/ethernet.png";
import fiber from "../assets/images/fiber.png";
import modem from "../assets/images/modem.png";

function Products() {
  return (
    <>
      <h2 className="text-center font-bold py-20 text-4xl md:text-5xl">Products</h2>
      <p className=" px-40 py-10 text-xl text-center">We offer a wide range of internet equipment, including routers, switches, modems, and networking accessories</p>


      <div className="grid md:grid-cols-2 lg:flex justify-center py-10 gap-7 p-4">
          <div className="border  rounded-lg shadow-md p-8">
            <img className="w-72 object-contain h-60" src={router} />
            <h3 className="font-bold text-center text-lg">Router</h3>
          </div>
          <div className="border rounded-lg shadow-md p-8">
            <img className="w-72  object-contain h-60" src={switche} />
            <h3 className="font-bold text-center text-lg">Switch </h3>
          </div>
          <div className="border rounded-lg shadow-md p-8">
            <img className="w-72 object-contain h-48" src={rack} />
            <h3 className="font-bold text-center text-lg">Server Rack</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:flex justify-center py-10 gap-7 p-4 ">
          <div className="border  rounded-lg shadow-md p-8">
            <img className="w-72 object-contain h-48 " src={ethernet} />
            <h3 className="font-bold text-center text-lg">Ethernet Cable</h3>
          </div>
          <div className="border  rounded-lg shadow-md p-8">
            <img className="w-72 object-contain h-48" src={fiber} />
            <h3 className="font-bold text-center text-lg">Fiber Cable</h3>
          </div>
          <div className="border  rounded-lg shadow-md p-8">
            <img className="w-72 object-contain h-48" src={modem} />
            <h3 className="font-bold text-center text-lg">Modem</h3>
          </div>
        </div>
    </>
  );
}

export default Products;
