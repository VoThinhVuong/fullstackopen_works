import React from 'react'
import PersonServices from './PersonServices'
import { useState } from 'react'

function PersonForm({persons,filtered, setPersons, setFilterPersons, setErrorMessage, setType}) {
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
        }
        console.log(newPerson)
    
        const dupName = persons.find(person =>  person.name.toLowerCase() == newPerson.name.toLowerCase() )
        console.log("duplicate name: ", dupName)
    
        const dupNumber = persons.find(person => person.number == newPerson.number)
        console.log("duplicate number: ", dupNumber)
    
        if(dupName != undefined && dupNumber == undefined) {
            if (window.confirm(`${newName} is already added to phonebook, repalce the old number with a new one?`)){
                newPerson.id = dupName.id
                PersonServices
                .changeNumber(newPerson)
                .then(updatedPerson => {
                    console.log(updatedPerson)
                    console.log(persons)
                    setPersons(persons.map(person => person.id == updatedPerson.id ? updatedPerson : person))
                    setFilterPersons(filtered.map(person => person.id == updatedPerson.id ? updatedPerson : person))
                    setNewName('')
                    setNewNumber('')
                    setType('succ')
                    setErrorMessage(
                        `Updated ${updatedPerson.name}'s number`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    setType('error')
                    setErrorMessage(
                        `${error.response.data.error}`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
            }
        }
        else if (dupName != undefined && dupNumber != undefined) {
            setType('error')
            setErrorMessage(
                `${newName} or ${newNum} are already added to phonebook`
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
        else if(dupName == undefined && dupNumber != undefined) {
            setType('error')
            setErrorMessage(
                `${newNum} is already added to phonebook`
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
        else {
            PersonServices
            .createPerson(newPerson)
            .then(person => {
                setPersons(persons.concat(person))
                setFilterPersons(persons.concat(person))
                setNewName('')
                setNewNumber('')
                setType('succ')
                setErrorMessage(
                    `Added ${person.name}`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            .catch(error => {
                setType('error')
                setErrorMessage(
                    `${error.response.data.error}`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
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