import { useEffect, useState } from "react"



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