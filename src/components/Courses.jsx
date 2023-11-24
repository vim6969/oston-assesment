import CourseCard from "./CourseCard";
import PageBreak from "./PageBreak";
const Courses = () => {
  return (
    <div>
      <p className="text-2xl text-center mt-14 font-bold">Our Courses</p>
      {/* courses cards */}
      <div className="md:flex mt-8 flex-shrink-0  flex-wrap gap-3 md:gap-1.5 justify-center">
        
        <CourseCard courseTitle='IIT JEE -Mains' classType='online class' desc ='for 12th class' bgGradient = 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'/>
        <CourseCard courseTitle='IHS Olympiad' classType='online class' desc ='for 12th class' bgGradient= 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'/>
        <CourseCard courseTitle='Coding' classType='online class' desc ='for 12th class' bgGradient= 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'/>
        <CourseCard courseTitle='CA' classType='online class' desc ='for 12th class' bgGradient= 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500' />
        <CourseCard courseTitle='English Olympiad' classType='online class' desc ='for 12th class' bgGradient= 'bg-gradient-to-tr from-violet-500 to-orange-300'/>
        <CourseCard courseTitle='Advanced Coding' classType='online class' desc ='for 12th class' bgGradient= 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900'/>

        
      
    </div>

    <PageBreak/>
    </div>
  );
};
export default Courses;
