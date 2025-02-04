import React from 'react'
import { useState } from 'react'

function Filter({persons, SetFilterPersons}) {

    const handleFilterName = (event) => {
        SetFilterPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div>filter shown with <input onChange={handleFilterName}/></div>
    )
}

export default Filter