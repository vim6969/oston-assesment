import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

const ClassroomPrograms = () => {
  return (
    <div>
        <p className="text-2xl font-bold mx-auto w-80 md:w-86 mb-12 md:mt-96">Our Class Room Programs</p>
        <div className="sm:flex justify-center items-center">
{/* program card 1 */}
<div className="card mx-6 p-4 my-2">
        {/* badge icon */}
        <div className="bg-yellow-100 w-14 h-14 rounded-full relative">
          <img
            src={icon1}
            alt="icon"
            width={40}
            className="absolute left-1.5 top-2.5"
          />
        </div>
        {/* context */}
        <p className="text-3xl font-bold text-blue-400 mt-4 mb-3">IIT</p>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </p>
        <button className="text-lg text-orange-400 mt-2 sm:mt-4 md:mt-4">Explore</button>
      </div>
      {/* program card 2 */}
      <div className="card mx-6 p-4 my-2">
        {/* badge icon */}
        <div className="bg-yellow-100 w-14 h-14 rounded-full relative">
          <img
            src={icon2}
            alt="icon"
            width={40}
            className="absolute left-1.5 top-2.5"
          />
        </div>
        {/* context */}
        <p className="text-3xl font-bold text-blue-400 mt-4 mb-3">NEET</p>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </p>
        <button className="text-lg text-orange-400 mt-2 sm:mt-4 md:mt-4">Explore</button>
      </div>
      {/* program card 3 */}
      <div className="card mx-6 p-4 my-2">
        {/* badge icon */}
        <div className="bg-yellow-100 w-14 h-14 rounded-full relative">
          <img
            src={icon3}
            alt="icon"
            width={40}
            className="absolute left-1.5 top-2.5"
          />
        </div>
        {/* context */}
        <p className="text-3xl font-bold text-blue-400 mt-4 mb-3">Foundation</p>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </p>
        <button className="text-lg text-orange-400 mt-2 sm:mt-4 md:mt-4">Explore</button>
      </div>
        </div>
        
    </div>
  );
};

export default ClassroomPrograms;
