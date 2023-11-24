import coursesImg from '../assets/courses-img.png'
const CourseCard=({courseTitle,classType,desc,bgGradient})=>{
    return(
        <div className="md:w-1/3 lg:w-1/4 mt-2">
        <div className={`flex justify-evenly items-center mx-1 rounded-lg ${bgGradient} bg-opacity-50`}>
          <div className="py-4">
            <p className="text-2xl text-purple-900 font-semibold">{courseTitle}</p>
            <p className="font-light text-lg">{classType}</p>
            <p className="font-bold">{desc}</p>
            <button className="register-btn mt-4">Register</button>
          </div>
          <div className="y-4 ">
            <img src={coursesImg} alt="course card icon" className=" w-24" />
          </div>
        </div>
        </div>
    )
}
export default CourseCard;