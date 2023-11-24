import logo from "../assets/gurukirpa-logo.png";
import insta from '../assets/Instagram.png'
import linkedin from '../assets/LinkedIn.png'
import facebook from '../assets/Facebook.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-12 ">
      <div className="bg-yellow-100 px-2 py-1.5 sm:px-12 md:pb-12 md:py-4">
        {/* logo */}
        <img src={logo} alt="logo" />
        <div className="sm:grid grid-cols-3">
        <div className="">
        <p className="font-bold mt-4">Address</p>
        <p className="font-light w-60 mt-2">
          Gurukripa Career Institute(GCI) Head Office: Jyoti Nagar, Piprali
          Road, Sikar Mob.: 88751-24365 info@gurukripa.ac.in Phone: 88751-24365
        </p>
        </div>
        <div className="">
        <p className="font-semibold">Gurukripa Career Institute(GCI)</p>
        {/* menu */}
        <div className="flex text-xs sm:text-base sm:flex-col gap-x-2 text-blue-600">
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Programs</Link>
            <Link to={'/'}>E - Learning</Link>
            <Link to={'/'}>About Us</Link>
            <Link to={'/'}>Results</Link>
            <Link to={'/'}>Student Portal</Link>
        </div>
        </div>
        {/* follow social links */}
        <div className="">
            <p className="font-semibold mt-2">Follow Us On</p>
            <div className="flex items-center">
                <img src={insta} alt="insta icon" className=" w-10 h-10"/>
                <img src={linkedin} alt="linkedin icon" className=" w-10 h-10" />
                <img src={facebook} alt="facebook icon" className=" w-8 h-8" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
