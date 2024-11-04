import React from "react";

function HogTile({ hog, showDetails, toggleDetails, hideHog }) {
  return (
    <div className="ui card eight wide column">
      <div onClick={() => toggleDetails(hog.name)}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
      </div>
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          <button onClick={() => hideHog(hog.name)}>Hide</button>
        </div>
      )}
    </div>
  );
}

export default HogTile;
