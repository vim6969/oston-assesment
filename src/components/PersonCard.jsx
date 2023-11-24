import person from '../assets/person_new.png'
const PersonCard=()=>{
    return(
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 flex-shrink-0"> 
        <div className="relative mt-8 mx-1 ">
        <img src={person} alt="person" className='rounded-lg '/>
        <div className="absolute top-2 left-2 rounded-full text-green-600 font-bold bg-white w-16 h-16">
            <p className='absolute left-4 top-3'>AIR</p>
            <p className='absolute left-5 top-7 mt-0.5'>21</p>

        </div>
        <div className="absolute bottom-2 left-2 text-white">
            <p className='text-lg'><b>Kiran Jonah</b></p>
            <p className='font-light'>class 2020</p>
        </div>
      </div>
      </div>
    )
}
export default PersonCard;
// w-56