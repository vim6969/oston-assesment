const Testimonial = () => {
  return (
    <div>
      <div className="sm:flex sm:mx-6 justify-between items-center my-12">
        <div className="mt-4 mx-2">
          <p className="text-xl font-bold">Our Testimonials</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad{" "}
          </p>
        </div>
        {/* quotation */}
        <div className=" bg-purple-300 p-2 rounded-lg m-2">
        <div className="relative p-2 sm:p-3">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in Duis aute irure dolor in
          </p>
          <p className="absolute top-0 left-0 font-bold text-xl">&ldquo;</p>
          <p className="absolute bottom-1 right-16 font-bold text-xl">&rdquo;</p>
        
        </div>
        
          <div className="ml-auto w-28">
            <p className="font-md"> Michael</p>
            <p className=" font-light">IIT- Kanpur</p>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
