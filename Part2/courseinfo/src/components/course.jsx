// Header component
const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

// Part component
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

//Content component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

// Total component
const Total = ({ parts }) => {
  const total = parts.reduce((sum, p) => sum + p.exercises, 0);

  return (
    <div>
      <p>
        <b>Total of {total} exercises</b>
      </p>
    </div>
  );
};

// Course component (default)
const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;