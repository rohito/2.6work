import React from 'react'
import ReactDOM from 'react-dom'

const Header = (p) => (<h1>{p.course.name}</h1>)

const Part = (p) =>(
  <p>{p.part} {p.excercise}</p>
)
const Content = (p) => {
  return(
    <div>
      <Part part = {p.course.parts[0].name} excercise= {p.course.parts[0].exercises}/>
      <Part part = {p.course.parts[1].name} excercise= {p.course.parts[1].exercises}/>
      <Part part = {p.course.parts[2].name} excercise= {p.course.parts[2].exercises}/>
      
    </div>
  )
}
const Total = (p) => (
<p>Number of exercises {p.course.parts[0].exercises +p.course.parts[1].exercises+ p.course.parts[2].exercises}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))