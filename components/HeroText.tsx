export const HeroText = () => {
  return (
    <div className="bg-white lg:bg-transparent -mt-20 py-12 px-8 lg:flex items-center">
      <div className="lg:ml-16">
        <h1 className="text-4xl lg:text-6xl lg:tracking-wider font-extrabold mb-3" style={{color: `#2D3957`}}>
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
            className="w-full rounded-md shadow-xl h-16 pl-16 border"
          />
          <button className="bg-orange-500 h-14 px-8 rounded-md text-orange-50 absolute top-0 right-0 mt-1 mr-1">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
