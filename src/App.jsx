import { Header } from "./Header.jsx";
import { Content } from "./Content.jsx";
import { Total } from "./Total.jsx";

const App = () => {
  const course = "Half Stack application development";

  const part_01 = {
    part: "Fundamentals of React",
    exercises: 10,
  };

  const part_02 = {
    part: "Using props to pass data",
    exercises: 7,
  };

  const part_03 = {
    part: "State of a component",
    exercises: 14,
  };

  const courseData = [part_01, part_02, part_03];

  return (
    <div>
      <Header course={course} />
      <Content CourseData={courseData} />
      <Total CourseData={courseData} />
    </div>
  );
};

export default App;
