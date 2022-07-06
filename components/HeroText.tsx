export const HeroText = () => {
  return (
    <div className="bg-white lg:bg-transparent -mt-20 py-12 px-8 lg:flex items-center">
      <div className="lg:ml-16">
        <h1 className="text-4xl font-extrabold mb-3">
          Most trusted Institute in India
        </h1>
        <h3 className="text-xl">
          We offer globally recognised Microsoft Certified courses taught by top
          pioneer of the industry.
        </h3>
        <div className="mt-6 w-full relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a course"
            className="w-full rounded-md shadow-xl h-12 pl-4 border"
          />
          <button className="bg-orange-500 h-10 px-4 rounded-md text-orange-50 absolute top-0 right-0 mt-1 mr-1">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
