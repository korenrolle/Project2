import "./Glossary.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import GlossaryTile from "./GlossaryTile"

const Glossary = (props) => {

    const [characterData, setCharacterData] = useState([])
    const [loading, setLoading] = useState(true)
    const URL = "https://rickandmortyapi.com/api/character"
    
    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch (URL)
            const Data = await response.json()
            //console.log(Data.results)
            setLoading(false)
            fetchInfo(Data.results)
            
            
            
        } catch (err) {
            console.log(err)
        }
        
    }

    async function fetchInfo(Data) {
        Data.map(async(item) => {
            const respond = await fetch (item.url)
            const charInfo = await respond.json()
            //console.log(charInfo.name)
            setCharacterData(state => {
                state=[...state,charInfo]
                return state
            })
          
        })

    }
    
    console.log(characterData)
   

    useEffect(() => {
        fetchData()
        
    }, [URL])

  

    return (
        <div className="Glossary-Page">
            <GlossaryTile character={characterData} loading={loading}/>
        </div>

)
}
export default Glossary