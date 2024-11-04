import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";
import HogForm from "./HogForm";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [showDetails, setShowDetails] = useState({});
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState({});

  const toggleDetails = (name) => {
    setShowDetails((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const addHog = (newHog) => {
    setHogList((prevList) => [...prevList, newHog]);
  };

  const hideHog = (name) => {
    setHiddenHogs((prev) => ({ ...prev, [name]: true }));
  };

  const filteredHogs = hogList
    .filter((hog) => !hiddenHogs[hog.name])
    .filter((hog) => (filterGreased ? hog.greased : true))
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <div>
        <button onClick={() => setFilterGreased(!filterGreased)}>
          {filterGreased ? "Show All Hogs" : "Show Greased Hogs Only"}
        </button>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <HogForm addHog={addHog} />
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
          <HogTile
            key={hog.name}
            hog={hog}
            showDetails={showDetails[hog.name]}
            toggleDetails={toggleDetails}
            hideHog={hideHog}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

