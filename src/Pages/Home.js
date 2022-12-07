import "./Home.css"
import React, { useEffect, useState } from "react"
import Iframe from "react-iframe"
import Player from "../Components/Player"




const Home = (props) => {

    return (
        <div className="Home-Page">
            <Player className="video"/>
        </div>
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