import map from "../assets/new_map.png";
import city from "../assets/hyd.png";
import whyGuru from "../assets/WHY GURUKRIPA_.png";
import one from "../assets/1.png";
import oneHero from "../assets/1_hero.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import sep from "../assets/Line-1.png";
const MapDiscover = () => {
  return (
    <div className="mt-12 mx-4 md:mx-12">
      <p className="text-xl font-semibold mb-10 md:ml-6 md:text-2xl">
        Discover Our Center in <b className="text-blue-400">Your City</b>{" "}
      </p>
      {/* map and cities component */}
      <div className="sm:flex justify-evenly items-center">
        <div className="flex justify-evenly">
          <img src={map} alt="map" className="w-96" />
        </div>
        <div className="bg-purple-300 md:p-10 p-6 rounded-lg">
          <div className="flex justify-between">
            <p className=" text-xl font-semibold mb-6">
              We are available in{" "}
              <span className="text-blue-400">60+ Cities</span>
            </p>
            <a href="/" className="font-light text-gary-200 hover:underline">
              view all
            </a>
          </div>
          <div className="flex gap-2 justify-evenly flex-wrap max-w-sm">
            {/* city card */}
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-0.5">
              <img src={city} alt="city" />
              <div className="flex justify-center">
                <p className="font-bold text-base">Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why gurukirpa component*/}
      <div className="mt-12">
        <div className="flex justify-center mb-10">
          <img src={whyGuru} alt="why gurukirpa" width={600} />
        </div>
        {/* grids start */}
        <div className=" sm:grid grid-cols-3 md:mx-24  ">
          {/* text */}
          <div className="sm:flex justify-between items-center sm:gap-x-3 ">
            <img src={one} alt="one" className="sm:h-40 h-24" />
            <div className="">
              <p className="text-lg font-semibold text-blue-400">
                Lorem ipsum dolo
              </p>
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
          {/* seperator */}
          <div className="sm:flex justify-center items-center hidden">
            <img src={sep} alt="" className="md:h-80 sm:h-40" />
            {/* fixes width 70px */}
          </div>

          {/* image */}
          <div className="flex justify-center items-center mt-2">
            <img src={oneHero} alt="" />
          </div>
          {/* --------------------------------------------------------- */}
          {/* image */}
          <div className="flex justify-center items-center mt-2">
            <img src={oneHero} alt="" />
          </div>
          {/* seperator */}
          <div className="sm:flex justify-center items-center hidden">
            <img src={sep} alt="" className="md:h-80 sm:h-40" />
          </div>
          {/* text */}
          <div className="sm:flex justify-between items-center sm:gap-x-3 ">
            <img src={two} alt="two" className="sm:h-40 h-24" />
            <div className="">
              <p className="text-lg font-semibold text-blue-400">
                Lorem ipsum dolo
              </p>
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          {/* text */}
          <div className="sm:flex justify-between items-center sm:gap-x-3 ">
            <img src={three} alt="three" className="sm:h-40 h-24" />
            <div className="">
              <p className="text-lg font-semibold text-blue-400">
                Lorem ipsum dolo
              </p>
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
          {/* seperator */}
          <div className="sm:flex justify-center items-center hidden">
            <img src={sep} alt="" className="md:h-80 sm:h-40" />
            {/* fixes width 70px */}
          </div>

          {/* image */}
          <div className="flex justify-center items-center mt-2">
            <img src={oneHero} alt="" />
          </div>
          {/* --------------------------------------------------------- */}
          {/* image */}
          <div className="flex justify-center items-center mt-2">
            <img src={oneHero} alt="" />
          </div>
          {/* seperator */}
          <div className="sm:flex justify-center items-center hidden">
            <img src={sep} alt="" className="md:h-80 sm:h-40" />
          </div>
          {/* text */}
          <div className="sm:flex justify-between items-center sm:gap-x-3 ">
            <img src={four} alt="four" className="sm:h-40 h-24" />
            <div className="">
              <p className="text-lg font-semibold text-blue-400">
                Lorem ipsum dolo
              </p>
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapDiscover;
