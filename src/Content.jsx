import { Part } from "./Part.jsx";
export const Content = ({ CourseData }) => {
  return (
    <>
      {CourseData.map((course) => {
        return (
          <Part
            key={course.part}
            part={course.part}
            exercise={course.exercises}
          />
        );
      })}
    </>
  );
};
