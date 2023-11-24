
import PersonCard from "./PersonCard";
const Results = () => {
  return (
    <div className=" md:mt-32 ">
      <div className="md:ml-12 mx-6 px-6 md:mx-1 md:px-1">
        <h3 className="text-2xl">
          Results{" "}
          <span className="text-2xl text-blue-500">Speak the Loudest</span>{" "}
          <button className=" border border-blue-500 rounded-full px-8 font-medium py-1.5  text-sm text-blue-500 ml-2 mt-0">
            join us
          </button>
        </h3>
      </div>
      {/* person card component scrollable */}
      <div className="overflow-x-auto whitespace-no-wrap">
        <div className="flex">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
      
    </div>
  );
};
export default Results;
