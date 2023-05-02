const students = {
  1: {
    name: "John",
    age: 10,
    subjects: ["Math", "English"],
  },
};

export default function Page() {
  const student = students[1];

  return (
    // If you want to pass key to a Fragment, you can’t use the <>...</> syntax. You have to explicitly import Fragment from 'react' and render <Fragment key={yourKey}>...</Fragment>.
    <>
      <h1>Student profile</h1>
      <div>Name: {student.name}</div>
      <div>Age: {student.age}</div>
      <div>Studies: {student.subjects.join(", ")}</div>
    </>
  );
}
