function About() {
  return (
    <>
      <div id="about" className=" py-10  lg:py-28">
        <h2 className="text-center font-bold  text-4xl md:text-5xl">
          About Us
        </h2>
        <p className=" text-center px-40 py-10 text-xl">
          We offer a comprehensive portfolio of products and services, from
          hardware and software to installation and maintenance, to help
          businesses of all sizes achieve their IT goals. We are committed to
          providing our customers with the best possible experience, from
          initial consultation to ongoing support. We have a team of highly
          experienced and qualified engineers who are passionate about helping
          businesses succeed.
        </p>
        <div className="flex p-4 justify-center space-x-8">
          <div className="border rounded-lg shadow-md px-6 py-6 space-y-2  items-center max-w-md ">
            <h1 className="text-center font-bold text-2xl">Our Vision</h1>
            <p className=" px-10 text-center pl-4">
              To be the world's most trusted provider of IT infrastructure and
              network solutions.
            </p>
          </div>
          <div className="border rounded-lg shadow-md px-6 py-6 space-y-2  items-center max-w-md ">
            <h1 className="text-center font-bold text-2xl">Our mission</h1>
            <p className="px-10 text-center pl-4">To empower businesses of all sizes to achieve their IT goals.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
