import service1 from '../assets/service-1-new-new.png'
import service2 from '../assets/service-2.png'
import locationIcon from '../assets/location-icon.png'
const Services = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-xl font-bold">
          Exploring Our Multifaceted Services{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-blue-400 text-xl font-bold">Our Diverse Offerings</p>
      </div>
      
      <div className="mx-2 sm:flex justify-center items-center gap-1">
        {/* card-1 */}
      <div className="relative  mt-12 ">
        <img src={service1} alt="hospital beds"/>
        {/* location badge */}
        <div className="flex justify-center items-center w-28 bg-white rounded-full absolute top-2 right-2 bg-opacity-50">
        <img src={locationIcon} alt=""/>
        <p>Indore</p>
        </div>
        {/* explore now */}
        <div className="flex justify-center">
        <div className="explore-now absolute bg-white bg-opacity-80 bottom-2 sm:w-80 md:w-96 px-1 py-1 rounded-xl">
            <div className="flex justify-between items-center">
            <p className='text-green-600 font-semibold sm:text-lg text-base'>GURUKRIPA Hospitals</p>
            <button className='font-light bg-blue-200 rounded-full px-3 py-1'>Explore now</button>
            </div>
            
        </div>
        </div>
      </div>
      {/* card-2 */}
      <div className="relative  mt-12 ">
        <img src={service2} alt="doctor hands working on laptop"/>
        {/* location badge */}
        <div className="flex justify-center items-center w-28 bg-white rounded-full absolute top-2 right-2 bg-opacity-50">
        <img src={locationIcon} alt=""/>
        <p>Indore</p>
        </div>
        {/* explore now */}
        <div className="flex justify-center">
        <div className="explore-now absolute bg-white bg-opacity-80 bottom-2 sm:w-80 md:w-96 px-1 py-1 rounded-xl">
            <div className="flex justify-between items-center">
            <p className='text-green-600 font-semibold sm:text-lg text-base'>GURUKRIPA Hospitals</p>
            <button className='font-light bg-blue-200 rounded-full px-3 py-1'>Explore now</button>
            </div>
            
        </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Services;
