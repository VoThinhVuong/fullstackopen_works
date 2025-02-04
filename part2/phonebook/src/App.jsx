import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleNameChange = (event) =>{
    
    setNewName(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    console.log(newPerson)

    const dup = persons.find(person => person.name == newPerson.name )
    console.log("duplicate: ", dup)

    if (dup == undefined) {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
    else alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <div key={i}>{person.name}</div>)}
    </div>
  )
}

export default App