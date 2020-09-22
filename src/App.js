import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [ persons, setPersons ] = useState([
      { id:1 ,name: 'Arto Hellas', number: '040-123456' },
    { id:2 ,name: 'Ada Lovelace', number: '39-44-5323523' },
    { id:3 ,name: 'Dan Abramov', number: '12-43-234345' },
    { id:4, name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ searchName, setSearchName] = useState('')
  
    const addPerson = (event) => {
      event.preventDefault()
      
      const personObject = {
        name:newName,
        // date: new Date().toISOString(),
         id: persons.length +1,
         number: newNumber
      }
      if(persons.some(e => e.name===newName)&&persons.some(e=>e.number===newNumber)){
        alert(`${newName} is already added to phonebook.`);
      }else{
        setPersons(persons.concat(personObject))
        
      }
      setNewName('')
      setNewNumber('')
    }

    
  
    const handlePersonChange = (event)=>{
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event)=>{
      // console.log(event.target.value)
      setNewNumber(event.target.value)
  }
    const handleSearchChange = (event) =>{
      console.log(event.target.value)
      setSearchName(event.target.value)
    }


     const displayName = ()=> 
      //  console.log(searchName)
      //  if(!searchName===""){
      //    persons.filter(p=>p.name.includes(searchName)).map(p=>
      //     <li key={p.id}>{p.name} {p.number}</li>
      //    )
      //  }
     persons.map(p=>
         <li key={p.id}>{p.name} {p.number}</li>
       )
       
    
       const personToShow = searchName === ''
       ? persons
       : persons.filter(person =>
           person.name.toLowerCase().includes(searchName.toLowerCase()))

     const row_names = () => personToShow.map(p=>
      <p key={p.id}>{p.name} {p.number}</p>
    )

    //   const displayName =()=> searchName
    // ? persons.filter(person => person.name.search(searchName) !== -1)
    // : persons;
      
    
  

  // persons.filter(p=>p.name.includes(searchName)).map(p=>(
  //   <li>
  //     {p.name}
  //   </li>
  // ))
  
    return (
      <div>
        <h2>Phonebook</h2>
        <p>filter shown with <input value={searchName} onChange={handleSearchChange}></input> </p>
        <form onSubmit={addPerson}>
          <div> name: <input value={newName} onChange={handlePersonChange}/> </div>
          <div> number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div> <button type="submit">add</button> </div>
        </form>
        <h2>Numbers</h2>
        <>{row_names()}</>
      </div>
    )
  }


ReactDOM.render(
  <App  />,
  document.getElementById('root')
)