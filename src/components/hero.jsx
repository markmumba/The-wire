import heroImage from "../assets/images/How-to-Check-Browsing-History-on-WiFi-Router.jpg";

function Hero() {
  return (
    <>
      <div class="relative w-full pt-20 ">
        <img className=" w-full  object-cover h-[800px] z-20 " src={heroImage} />
        <div className="absolute top-20 left-0 bottom-0 right-1/2   text-white  bg-gradient-to-r from-color1  ">
          <h1 className=" font-bold py-60 px-7 text-7xl">Your trusted source for <br/>high-quality internet equipment</h1>
        </div>
      </div>
    </>
  );
}

// #5687B0
// #008081
export default Hero;
