import ELearnTitle from "../assets/E-Learning.svg";
import icon from "../assets/e-learn-icon.png";
import bookVec from "../assets/book-vector.svg";

const ELearn = () => {
  return (
    <div className=" mt-12  mb-4 sm:mb-[500px] lg:mb-80 xl:mb-64 sm:mx-12 mx-6">
      <div className="sm:relative">
        
        <img src={ELearnTitle} alt="title" className=" w-60 md:w-1/2 mx-auto" />    
        
        <div className="sm:flex sm:absolute sm:top-12 md:top-20 lg:top-24 xl:top-28 gap-x-2 sm:mx-1">
        {/* card component design*/}
        <div className="rounded-lg border border-gray-800 p-2 mt-1 bg-white md:p-4">
            {/* badge */}
            <div className="bg-yellow-100 rounded-2xl w-40 text-sm">
            <div className="flex justify-center py-1.5 gap-x-2">
                <img src={bookVec} alt="book icon" />
                <p>E - Learning</p>
            </div>
            </div>
            {/* title,btn,icon and grid */}
            <div className="grid grid-cols-3 gap-x-2">
            {/* title,snip, btn */}
            <div className="mt-3 col-span-2">
                <p className="text-2xl sm:text-3xl text-blue-400 mb-6">Pre Engineering Division</p>
                <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                </p>
                <button className="px-4 py-2 bg-black text-white text-center rounded-lg">Register</button>
            </div>
            {/* icon */}
            <div className="col-span-1 w-32 sm:w-28 flex justify-center items-center">
            <img src={icon} alt="icon"/>
            </div>
            
            </div>
        </div>
      {/* card component design*/}
        <div className="rounded-lg border border-gray-800 p-2 mt-1 bg-white md:p-4">
            {/* badge */}
            <div className="bg-yellow-100 rounded-2xl w-40 text-sm">
            <div className="flex justify-center py-1.5 gap-x-2">
                <img src={bookVec} alt="book icon" />
                <p>E - Learning</p>
            </div>
            </div>
            {/* title,btn,icon and grid */}
            <div className="grid grid-cols-3 gap-x-2">
            {/* title,snip, btn */}
            <div className="mt-3 col-span-2">
                <p className="text-2xl sm:text-3xl text-blue-400 mb-6">Pre Engineering Division</p>
                <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                </p>
                <button className="px-4 py-2 bg-black text-white text-center rounded-lg">Register</button>
            </div>
            {/* icon */}
            <div className="col-span-1 w-32 sm:w-28 flex justify-center items-center">
            <img src={icon} alt="icon" />
            </div>
            
            </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ELearn;
