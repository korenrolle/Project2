import "./Glossary.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import GlossaryTile from "./GlossaryTile"


const Glossary = (props) => {

    const [characterData, setCharacterData] = useState([])
    const [loading, setLoading] = useState(true)
    const [URL, setURL] = useState("https://rickandmortyapi.com/api/character?page=1")
    
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()

    const [currentPage, setCurrentPage] = useState(1)

    const Pages = []

    for (let i = 1; i < 43; i++) {
        Pages.push(i)
    }
    
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
            setCharacterData(list => {
                list=[...list,charInfo]
                return list
            })
          
        })

    }
    

    useEffect(() => {
        fetchData()
        
    }, [URL])

    console.log(`current is ${URL}`)
    console.log(`prev is ${prevPageUrl}`)
    console.log(`next is ${nextPageUrl}`)
    console.log(`current page is ${currentPage}`)

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="Glossary-Page">
                <nav className="navigation_wrapper">
                    <ul className='pagination'>
                    {Pages.map(page => (
                        <li key={page} className='page-item'>
                        <a onClick={() => {
                            setCharacterData([])
                            setURL(`https://rickandmortyapi.com/api/character?page=${parseInt(page)}`)
                        }
                            
                            } 
                            href='javascript:' className='page-link'>
                            {page}
                        </a>
                 
                        </li>
                        ))}
                    </ul>
                </nav>
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
