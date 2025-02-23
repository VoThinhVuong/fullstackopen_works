import React from 'react'
import PersonServices from './PersonServices'

function Persons({filtered,persons, setPersons, setFilterPersons, setErrorMessage, setType}) {

    const handleDelete = (person) => {
        if(window.confirm(`Delete ${person.name}?`)){ 
            PersonServices.deletePerson(person.id)
            .then(person => {
                setPersons(persons.filter(n => n.id !== person.id))
                setFilterPersons(filtered.filter(n => n.id !== person.id))
                setType('succ')
                setErrorMessage(
                    `Information of ${person.name} successfully removed`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            .catch(error => {
                setType('error')
                setErrorMessage(
                    `Information of ${person.name} has already been removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
        }
    }

    return (
    <>
        {filtered.map(person => <div key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button></div>)}
    </>
    )
}

export default Persons