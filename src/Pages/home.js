import { useEffect, useState } from "react"



const Home = (props) => {

    const [quote, setQuote] = useState(null)

    async function fetchId() {
        try {
            const response = await fetch (`https://zenquotes.io/api/today`)
            const quoteData = response.json()
            console.log(quoteData)

            setQuote(quoteData)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchId()
    }, [])

    return (
        <div>
            <h2>Hello there</h2>
           {quote ? <img src={quote.media_type} alt='image'/> : null} 
        </div>
    )
}

export default Home