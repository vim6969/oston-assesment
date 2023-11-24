import homeBanner from '../assets/home-banner.png' 
import test from '../assets/test-home-banner.png'
import learners from '../assets/learners-home-banner.png'
const HomeBanner = () => {
  return <div>
    <div className="py-4 px-6 mx-6 md:relative">
    <img src={homeBanner} alt="home banner" className='rounded-lg'/>
    <div className="md:absolute bg-blue-100 md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-1/2 rounded-lg mt-2">
        <div className="md:grid grid-cols-3 lg:p-8 md:p-5 lg:gap-3 md:gap-1.5 p-2 flex items-center justify-center">
        <p className='font-base'>Expert Mentors Ready to Guide You.</p>
        <div className="lg:flex bg-white rounded-sm justify-evenly items-center lg:p-4 md:p-1.5 p-2">
            <p className=' w-20'><b>10k+</b> Tests</p>
            <img src={test} alt="test icon" className=' w-6 h-6 lg:w-8 lg:h-auto' />
        </div>
        <div className="lg:flex bg-white rounded-sm justify-evenly items-center lg:p-4 md:p-1.5 p-2">
            <p className='w-20'><b>1000+</b> Learners</p>
            <img src={learners} alt="learners icon" className=' w-6 h-6 lg:w-8 lg:h-auto'/>
        </div>
        </div>
        

    </div>
    </div>
    
  </div>;
};
export default HomeBanner;
