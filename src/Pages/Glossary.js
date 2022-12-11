import "./Glossary.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import GlossaryTile from "./GlossaryTile"


const Glossary = (props) => {

    const [characterData, setCharacterData] = useState([])
    const [loading, setLoading] = useState(true)
    const [URL, setURL] = useState("https://rickandmortyapi.com/api/character")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    
    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch (URL)
            const Data = await response.json()
            //console.log(Data.results)

            setLoading(false)
            fetchInfo(Data.results)
            console.log(Data.info)
            setNextPageUrl(Data.info.next)
            setPrevPageUrl(Data.info.prev)
            
            
            
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
    
    

    useEffect(() => {
        fetchData()
        
    }, [URL])

  

    return (
        <div className="Glossary-Page">
                <div className="pageNumber">  </div>
                <GlossaryTile character={characterData} loading={loading}/>
                <div className="prev-next">
                    { prevPageUrl && <button onClick={()=> {
                        setCharacterData([])
                        setURL(prevPageUrl)
                    }}>Previous</button>}
                    { nextPageUrl && <button onClick={()=> {
                        setCharacterData([])
                        setURL(nextPageUrl)
                    }}>Next</button>}
                </div>
            
        </div>

)
}
export default Glossary
