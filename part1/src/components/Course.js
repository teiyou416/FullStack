import React from "react";
const H2header = ({ header }) => <h2>{header}</h2>;
const CourseContent = ({ course }) => (
  <div>
    <ul>
      {course.map(({ name, exercises, id }) => (
        <CoursePart key={id} name={name} exercises={exercises} />
      ))}
    </ul>
  </div>
);
const TotalExercises = ({ exercises }) => {
  const total = exercises.reduce((s, part) => s + part.exercises, 0);
  return <p> total of {total} exercises</p>;
};
const CoursePart = ({ name, exercises }) => (
  <li>
    {name}:{exercises}
  </li>
);
const Course = ({ course }) => (
  <div>
    <H2header key={course.id} header={course.name} />
    <CourseContent course={course.parts} />
    <TotalExercises exercises={course.parts} />
  </div>
);
export default Course;
