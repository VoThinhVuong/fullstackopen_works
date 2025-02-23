import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Component/Persons'
import PersonForm from './Component/PersonForm'
import Filter from './Component/Filter'
import PersonServices from './Component/PersonServices'
import Notification from './Component/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filtered, setFilterPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState("error")

  useEffect(() => {
    PersonServices
    .getAll()
    .then(AllPersons => {
      setPersons(AllPersons)
      setFilterPersons(AllPersons)
    })
  },[])


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} type={type}/>
      
      <Filter persons={persons} SetFilterPersons={setFilterPersons}/>

      <h2>add a new</h2>

      <PersonForm persons={persons} filtered={filtered} setPersons={setPersons} setFilterPersons={setFilterPersons} setErrorMessage={setErrorMessage} setType={setType}/>

      <h2>Numbers</h2>

      <Persons filtered={filtered} persons={persons} setPersons={setPersons} setFilterPersons={setFilterPersons} setErrorMessage={setErrorMessage} setType={setType}/>
    </div>
  )
}

export default App