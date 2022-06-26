import { CourseActiveDirectory, CourseAzure, CourseExchange, CourseNetworking, CourseOffice, CourseWindows10 } from "./Images";

export const PopularCourseItem = ({
  course,
  title,
  color,
  children
}) => {
  const courses = {
    azure: CourseAzure,
    windows: CourseWindows10,
    directory: CourseActiveDirectory,
    exchange: CourseExchange,
    networking: CourseNetworking,
    office: CourseOffice
  };

  const Course = courses[course]

  return (
    <div>
      <div>
        <Course />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}
        </p>
        <button className={`${color}`}>Join now</button>
      </div>
    </div>
  );
};
