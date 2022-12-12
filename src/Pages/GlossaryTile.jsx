import React, {useState} from "react";

const GlossaryTile = ({character,loading, characterInfo}) => {
    return (
        <div className="tile-container">
            {loading ? <h1>Loading...</h1> : character.map((item) => {
                return(
                    <>
                        <div className="tile" key={item.id}>
                            <img src={item.image} className="tile-picture" />
                            <h2 className="tile-info">{item.name}</h2>

                        </div>
                    </>
                    
                )
            })}
        </div>
    )
};

export default GlossaryTile;