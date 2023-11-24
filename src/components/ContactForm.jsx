import contactPoster from '../assets/contact-poster.png'
const ContactForm = () => {
  return (
    <div>
      <div className="mx-6 mt-20  md:flex justify-evenly items-center">
        <form action="" className='border border-gray-600 rounded-lg p-4'>
            <div className="flex justify-center">
            <p className='text-lg text-blue-500 font-semibold w-72 text-center'>Take the first few steps which can help you take the giant strides in you career</p>

            </div>
          <label
            htmlFor="name"
            className="block text-gray-900 font-medium text-sm"
          >
            Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            className="block w-full form-input rounded-lg"
            placeholder="enter your full name"
          />
          <label
            htmlFor="email"
            className="block text-gray-900 font-mediummt mt-2 text-sm"
          >
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            className="block w-full form-input rounded-lg"
            placeholder="enter your email address"
          />
          <label
            htmlFor="phone"
            className="block text-gray-900 font-mediummt mt-2 text-sm"
          >
            Phone
          </label>
          <div className="relative">
            <input
              type="number"
              name=""
              id="phone"
              className=" block w-full form-input rounded-lg px-12"
              placeholder="enter your phone number"
            />
            <p className="absolute left-0.5 top-0.5 bg-yellow-200 border rounded-lg p-2 text-sm text-gray-800">
              +91
            </p>
          </div>
          <p className="mt-4 text-sm">
            By clicking Register now you will agree to the terms and conditions
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-blue-300 rounded-lg mt-1.5 text-lg font-md"
            >
              Register
            </button>
          </div>
        </form>
        <div className="">
            <img src={contactPoster} alt="contact poster" className=' hidden md:block md:w-96 md:h-96' />
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
