import "./Home.css"
import React, { useEffect, useState } from "react"
import Player from "../Components/Player"
import { Routes, Route } from "react-router-dom"
import Character from "./Character"
import NavHome from "../Components/navhome"
import Glossary from "./Glossary"




const Home = (props) => {

    return (
        <nav className="Home">
            <NavHome />
            <div className="Home-Page">
                <Routes>
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/game" element={<Character />} />
                </Routes>
                <Player className="video"/>
            </div>
        </nav>
            
)
}
export default Home

/*
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"



const Home = (props) => {

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
        <div>
           { character ? 
           <>
           <img src={character.image} alt='quote' />
           <h2>{character.name}</h2>
           </>
            : null}
        </div>
)
}
export default Home
*/