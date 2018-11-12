import React from "react";
import avengers from "./Avengers";

const Avengers = () => {
  return (
    <div className="avengers-list">
      <h1>H-E-L-L-O</h1>
      <h3>This is a list of "Avengers"</h3>
      <div>
        {avengers.map(avenger => (
          <p>Avenger Name: {avenger.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Avengers;
