import fs from "fs";
import path from "path";

const coursesDirectory = path.join(process.cwd(), "courses");

export function getAllCategories() {
  const categories = fs.readdirSync(coursesDirectory, { withFileTypes: true });
  return categories
    .filter((category) => category.isDirectory())
    .map((category) => {
      return {
        params: {
          category: category.name,
        },
      };
    });
}

export function getCoursesForCategory(category: string | string[] | undefined) {
  return fs.readdirSync(`${coursesDirectory}/${category}`);
}

export function getAllCourseSlugs() {
  const fileNames = fs.readdirSync(coursesDirectory, { withFileTypes: true });
  return fileNames
    .filter((fileName) => fileName.isFile())
    .map((fileName) => {
      return {
        params: {
          slug: fileName.name.replace(/\.json$/, ""),
        },
      };
    });
}

export async function getCourseData(slug: any) {
  const fileName = path.join(coursesDirectory, slug);
  // const fileContents = require(`${fileName}.js`);
  const data = fs.readFileSync(`${fileName}.json`);
  const fileContents = JSON.parse(data.toString());

  return {
    slug,
    ...fileContents,
  };
}

export interface CourseContent {
  title: string;
  subtitle: string;
  heroImage: string;
  heroBg?: string;
  idealFor: string;
  learningObjectives: string;
  courseDetail: CourseDetail;
  modules: Array<CourseModule>;
  onCompletion: Array<string>;
  batches: Array<Batch>;
}

export interface CourseDetail {
  duration: string;
  certification: string;
  batchInfo: string;
  level: string;
  highlights: Array<CourseHighlight>;
  bg: string;
  displayImage: string;
  description: string;
}

export interface CourseModule {
  title: string;
  submodules: Array<CourseSubModule>;
}

export interface Batch {
  id: string;
  days: string;
  mode: string;
  time: string;
  duration: string;
}

export interface CourseHighlight {
  icon: string;
  color: string;
  heading: string;
  subheading: string;
}

export interface CourseSubModule {
  heading: string;
  contents: Array<string>;
}
