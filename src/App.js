import "./App.css";
import React, { useState } from "react";
import Navigation from "./Component/navigation";
import Card from "./Component/card";
import Options from "./Component/options";
import stays from "./stays";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [destination,setDestination]= useState("Helsinki")
  const [total,setGuestsTotal]= useState(null);
  const openBox = () => {
    setIsActive((current) => !current);
  };
  const onRecieve=(place,guests,children)=>
  {
    openBox();
    setGuestsTotal(guests+children);
    setDestination(place)
}
  return (
    <div className="App">

    {/* Hidden Navigation */}

      <div className={`main--search ${isActive ? "hide" : ""}`}>
        <Options
         closeAndSearch={onRecieve} 
         />
      </div>

      {/* Division */}

      <div className={isActive ? "layer" : ""}>

      {/* Heading */}
        <Navigation onSearchChange={openBox}
        place={destination}
        guests={total} 
          // totalStays={stays.filter(items=>items.city.includes(destination)).length}
        />
        <div className="title--box">
          <h1 className="title">Stays in Finland</h1>
          <p className="number">{(stays.filter(items=>items.city.includes(destination)).length)-1}+ Stays</p>
        </div>
        <div className="card--box">
          {stays.filter(items=>items.city.includes(destination) && items.maxGuests>=total).map((items) => (
            <Card data={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

// .filter(items=>items.city.includes(destination))
export default App;
