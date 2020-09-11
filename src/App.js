import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
  
    const addPerson = (event) => {
      event.preventDefault()
      console.log('button clicked',event.target)
      const personObject = {
        name:newName,
        // date: new Date().toISOString(),
        // id: persons.length +1,
      }
      setPersons(persons.concat(personObject))
      setPersons('')
    }
  
    const handlePersonChange = (event)=>{
        console.log(event.target.value)
        if(persons.name===event.target.value){
          alert(event.target.value," is already on the list")
        }else setNewName(event.target.value)
    }
    const displayName = ()=> persons.map(p=>
      <li key={p.id}>{p.name}</li>
    )

    
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} 
                          onChange={handlePersonChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {displayName()}
        </ul>
      </div>
    )
  }
export default App