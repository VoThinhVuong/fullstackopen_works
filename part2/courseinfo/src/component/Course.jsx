const Header = ({ course }) => <h3>{course}</h3>

const Total = ({ sum }) => <strong>Total of {sum} exercises</strong>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total}/>
    </div>
  )
}


export default Course