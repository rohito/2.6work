import React, { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Filter value={searchName} onChange= {handleSearchChange}/>
        <h2>add a new</h2>
        <PersonForm onSubmit={addPerson} name={{value: newName,onChange:handlePersonChange}} 
        number={{value:newNumber,onChange:handleNumberChange}}/>
        <h2>Numbers</h2>
        <>{row_names()}</>
      </div>
    )
  }
export default App;

