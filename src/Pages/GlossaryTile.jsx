import React from "react";

const NavApp = ({character,loading}) => {
    return (
        <div className="tile-container">
            {loading ? <h1>Loading...</h1> : character.map((item) => {
                return(
                    <>
                        <div className="tile">
                            <img src={item.image} className="tile-picture" />
                            <h2 className="tile-info">{item.name}</h2>

                        </div>
                    </>
                )
            })}
        </div>
    )
};

export default NavApp;

/*

*/