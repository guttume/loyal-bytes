
export const HurryUp = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-blue-50 p-4 lg:rounded-lg shadow-md lg:flex items-center justify-between lg:px-16 lg:py-12">
      <div className="text-center lg:text-left">
        <p className="font-bold text-lg mb-3">Hurry up!</p>
        <p>We have limited seats for specialisation courses. Apply now and avail courses.</p>
      </div>
      <div className="mt-6 flex lg:block justify-center">
          <a href="/courses.html" title="View All Courses" className="btn btn-white">View All Courses</a>
      </div>
    </div>
  );
};
