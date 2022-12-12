import "./Glossary.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import GlossaryTile from "./GlossaryTile"


const Glossary = (props) => {

    const [characterData, setCharacterData] = useState([])
    const [loading, setLoading] = useState(true)
    const [URL, setURL] = useState("https://rickandmortyapi.com/api/character?page=1")
    const [currentPage, setCurrentPage] = useState()
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const Pages = []

    for (let i = 1; i < 43; i++){
        Pages.push(i)
    }
    console.log(Pages)
    
    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch (URL)
            const Data = await response.json()

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
    
    const handleClick = () => {
        for (let i = 1; i < Pages; i++){
            
            const Num = i
            console.log(`this console is ${i}`)
           // setCurrentPage(`https://rickandmortyapi.com/api/character?page=${i}`)
        }
        
    }
    handleClick()
    

    useEffect(() => {
        fetchData()
        
    }, [URL])

    console.log(`current is ${URL}`)
    console.log(`prev is ${prevPageUrl}`)
    console.log(`next is ${nextPageUrl}`)


    return (
        <div className="Glossary-Page">
                {Pages.map((Page, index) => {
                    return <button key={index} >{Page}</button>
                })}
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
