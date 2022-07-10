import fs from "fs";
import path from "path";

const coursesDirectory = path.join(process.cwd(), "courses");

export function getAllCourseSlugs() {
  const fileNames = fs.readdirSync(coursesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.js$/, ""),
      },
    };
  });
}

export function getCourseData(slug: string | string[] | undefined) {
  const fileContents = require(`../courses/${slug}.js`);

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
