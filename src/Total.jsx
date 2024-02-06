export const Total = ({ CourseData }) => {
  const total =
    CourseData[0].exercises + CourseData[1].exercises + CourseData[2].exercises;

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};
