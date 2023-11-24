import logo from "../assets/gurukirpa-logo.png"
const Navbar=()=>{
    return(
        <div className="flex justify-between items-center py-4 px-6 border rounded-md sm:mx-12  shadow-md">
            <div className="">
                <img src={logo} alt="gurukirpa-logo" className=" h-16 w-40" />
            </div>
            <div className="text-base">
                <a href="/" className="nav-links">Home</a>
                <a href="/programs" className="nav-links">Programs</a>
                <a href="/e-learning" className="nav-links">E-Learning</a>
                <a href="/about-us" className="nav-links">About Us</a>
                <a href="/results" className="nav-links">Results</a>
                <a href="/student" className="nav-links">Student Portal</a>
                <button className="border p-1.5 rounded-lg bg-blue-400 text-white ">Enquire Now</button>

            </div>
        </div>
    )
}
export default Navbar;