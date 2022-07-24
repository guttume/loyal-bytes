import fs from "fs";
import path from "path";

const coursesDirectory = path.join(process.cwd(), "courses");

export function getAllCategories() {
  const categories = fs.readdirSync(coursesDirectory);
  return categories.map((category) => {
    return {
      params: {
        category,
      },
    };
  });
}

export function getCoursesForCategory(category: string | string[] | undefined) {
  return fs.readdirSync(`${coursesDirectory}/${category}`);
}

export function getAllCourseSlugs() {
  const files: any[] = [];
  const categories = fs.readdirSync(coursesDirectory);
  categories.map((category) => {
    const fileNames = fs.readdirSync(path.join(coursesDirectory, category));
    fileNames.forEach((fileName) => {
      files.push({
        params: {
          category: category,
          slug: fileName.replace(/\.js$/, ""),
        },
      });
    });
  });
  return files;
}

export function getCourseData(
  category: string | string[] | undefined,
  slug: string | string[] | undefined
) {
  const fileContents = require(`${coursesDirectory}/${category}/${slug}.js`);

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
