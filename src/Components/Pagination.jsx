import React, {useState} from "react"

function Pagination() {
    const Pages = []
    for (let i = 1; i < 43; i++) {
        Pages.push(i)
    }

    const [URL, setURL] = useState("https://rickandmortyapi.com/api/character?page=1")
    const [currentPage, setCurrentPage] = useState(URL)
        

    console.log(`is this message going though`)
        return (
            <div>
                {Pages.map((Page, index) => {
                    return <button key={index}></button>
                })}
            </div>
        )
    
}

export default Pagination