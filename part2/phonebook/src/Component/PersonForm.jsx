import React from 'react'
import { useState } from 'react'

function PersonForm({persons, setPersons}) {
    const [newName, setNewName] = useState('')
    const [newNum, setNewNumber] = useState('')

    const handleNameChange = (event) =>{
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) =>{
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
          name: newName,
          number: newNum,
          id: persons.length + 1
        }
        console.log(newPerson)
    
        const dupName = persons.find(person => person.name == newPerson.name )
        console.log("duplicate name: ", dupName)
    
        const dupNumber = persons.find(person => person.number == newPerson.number)
        console.log("duplicate number: ", dupNumber)
    
        if(dupName != undefined) alert(`${newName} is already added to phonebook`)
        if(dupNumber != undefined) alert(`${newNum} is already added to phonebook`)
        else {
          setPersons(persons.concat(newPerson))
          setNewName('')
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNum} onChange={handleNumberChange}/></div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm