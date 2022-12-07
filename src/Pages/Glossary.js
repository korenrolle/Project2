import "./Glossary.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

const Glossary = (props) => {

    const [character, setCharacter] = useState(null)

    async function fetchId() {
        try {
            const response = await fetch (`https://rickandmortyapi.com/api/character/1`)
            const characterData = await response.json()
            console.log(characterData)

            setCharacter(characterData)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchId()
    }, [])

    return (
        <div className="Glossary-Page">
            <h1>This is Glossary Page</h1>
            <div>
           { character ? 
           <>
           <img src={character.image} alt='quote' />
           <h2>{character.name}</h2>
           </>
            : null}
        </div>
        </div>

)
}
export default Glossary