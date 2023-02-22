import React from "react";
import "./navigation.css"
export default function Navigation({onSearchChange,place,guests})
{
    const handleOnClick=()=>
    {
        onSearchChange();
    }
    // const [value, setValue] = useState("")
    return (
        <div className="nav--bar">
        <div className="logo--container">
        <img className="logo" alt="logo" src="./images/logo.png"></img>

        </div>
            <div className="search--bar">
                <input className="search" placeholder={`${place}, Finland`}
                onClick={handleOnClick}
                />
                <input className="guests" placeholder={`${guests} Guests`}
                onClick={handleOnClick}
                ></input>
                <button className="search--button"
                onClick={handleOnClick}
                ><img src="./images/search.svg" alt="searchIcon"></img></button>
            </div>
        </div>
    )
}