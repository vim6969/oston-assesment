import masterPerson from "../assets/mastermind-person.png";
import lineSep from "../assets/line-seperator.png";
import yearsOfExp from "../assets/years-of-exp-icon.png";
const Mastermind = () => {
  return (
    <div className="mt-12 md:mx-28">
      <div className="flex justify-center mb-6">
        <p className="text-xl sm:text-2xl">
          Meet our <span className="text-blue-400">Master Minds</span>
        </p>
      </div>
      {/* cards */}
      {/* make a grid of col-5 */}
      <div className="sm:grid grid-cols-6 gap-2">
        <div className="flex gap-x-1 sm:col-span-3">
          {/* col-1 */}
          <div className="col-num-1 sm:col-span-1">
            <div className="relative">
              <img
                src={masterPerson}
                alt="master person"
                className="rounded-lg w-64 "
              />
              <p className="absolute bottom-1.5 left-3  font-light text-xl text-white">
                Michael
              </p>
            </div>
          </div>
          {/* col-2 */}
          <div className="col-num-2 sm:col-span-1">
            <div className="relative">
              <img
                src={masterPerson}
                alt="master person"
                className="rounded-lg w-64 "
              />
              <p className="absolute bottom-1.5 left-3  font-light text-xl text-white">
                Michael
              </p>
            </div>
          </div>
          {/* col-3 */}
          <div className="col-num-3 sm:col-span-1">
            <div className="relative">
              <img
                src={masterPerson}
                alt="master person"
                className="rounded-lg w-64 "
              />
              <p className="absolute bottom-1.5 left-3  font-light text-xl text-white">
                Michael
              </p>
            </div>
          </div>
        </div>
        {/* Frame-97 michael info card */}
        <div className="michael-card mt-6 border rounded-lg p-6 sm:col-span-3 sm:mt-0 shadow-md">
          <div className="flex justify-between  items-center">
            <div className="flex-col">
              <p>Michael</p>
              <p>IIT-JEE Expert</p>
            </div>

            <div className="">
              <button className="px-2 py-0.5 rounded-full bg-purple-300 text-sm">
                view Profile
              </button>
            </div>
          </div>
          {/* education and areas of interest */}
          <div className="flex mt-4 gap-4">
            <div className="flex-col">
              <p className="text-lg text-purple-300">Education</p>
              <p>IIT- Kanpur, India</p>
            </div>
            {/* seperator */}
            <img src={lineSep} alt="line seperator" />

            <div className="flex-col ">
              <p className="text-lg text-purple-300">Areas of Interest</p>
              <p>Physics, Mathematics, Chemistry</p>
            </div>
          </div>
          {/* years of experience */}
          <div className="years-of-exp bg-yellow-200 rounded-lg flex w-40 mt-4 gap-x-2 ">
            {/* icon */}
            <img src={yearsOfExp} alt="icon" />
            <p>20+ years of Experinece</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Mastermind;
