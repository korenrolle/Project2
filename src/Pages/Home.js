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
