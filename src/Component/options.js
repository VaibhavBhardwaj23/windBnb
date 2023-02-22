import React, {  useState } from "react";
import "./options.css";
export default function Options({ closeOnClick, sendName, closeAndSearch }) {
  const [place, setPlace] = useState("Helsinki,Finland");
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isGuestsActive, setIsGuestsActive] = useState(false);
  const [guests, setGuests] = useState(0);
  const [children, setChildren] = useState(0);

  // Functions Declaration
  const handleOnClick = () => {
    closeAndSearch(place,guests,children);
  };

  return (
    <div className="various--options">
      {/* Navigation Options */}
      <div className="buttons">
        <button className="main--button" onClick={()=>{setIsLocationActive((current) => !current);setIsGuestsActive((current) => !current);}}>
          <p className="upper"> Location</p>
          <h4 className="lower">{place}</h4>
        </button>
        <button className="main--button" onClick={()=>{setIsGuestsActive((current) => !current);setIsLocationActive((current) => !current);}}>
          <p className="upper"> Add Guests</p>
          <h4 className="lower">{guests + children} guests</h4>
        </button>
        <div onClick={handleOnClick} className="search--buttons">
        <img src="./images/search1.svg" alt="searchIcon"></img>
       <p>Search</p>          
        </div>
      </div>

      <div className="location--option">
        {/*Location  Options  */}
        <div  className={`box--1 ${isLocationActive ? "swift" : ""}`}>
          <div className="location">
            <img src="./images/location.png" alt="logoIcon"></img>
            <p
              onClick={() => {
                setPlace("Helsinki");
              }}
            >
              Helsinki,Finland
            </p>
          </div>
          <div className="location">
            <img src="./images/location.png" alt="logoIcon"></img>
            <p
              onClick={() => {
                setPlace("Turku");
              }}
            >
              Turku, Finland
            </p>
          </div>
          <div className="location">
            <img src="./images/location.png" alt="logoIcon"></img>
            <p
              onClick={() => {
                setPlace("Oulu");
              }}
            >
              Oulu, Finland
            </p>
          </div>
          <div className="location">
            <img src="./images/location.png" alt="logoIcon"></img>
            <p
              onClick={() => {
                setPlace("Vaasa");
              }}
            >
              Vaasa, Finland
            </p>
          </div>
        </div>
        {/* Guests Options */}
        <div className={`box--2 ${isGuestsActive ? "" : "swift"}`}>
          <p className="upp"> Adults</p>
          <h4 className="low">Ages 13 and above</h4>
          <button
            className="minus"
            onClick={() => {
              setGuests(guests - 1);
            }}
          >
            -
          </button>
          <input className="guestsValue" type="text" value={guests} />
          <button
            className="plus"
            onClick={() => {
              setGuests(guests + 1);
            }}
          >
            +
          </button>
          <p className="upp"> Children</p>
          <h4 className="low">Ages 12 and below</h4>
          <button
            className="minus"
            onClick={() => {
              setChildren(children - 1);
            }}
          >
            -
          </button>
          <input className="guestsValue" type="text" value={children} />
          <button
            className="plus"
            onClick={() => {
              setChildren(children + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="box--3"></div>
      </div>
      <div  onClick={handleOnClick} className="mobileSearch--buttons">
       <img src="./images/search1.svg" alt="searchIcon"></img>
       <p>Search</p>
      </div>
    </div>
  );
}
