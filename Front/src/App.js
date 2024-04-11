import React, { useEffect } from "react";
import "./App.css";
import MapContainer from "./MapContainer";
import SearchPlace from "./SearchPlace";

function App() {
  return (
    // <div className="md:flex md:items-center md:justify-between">
    <div className="App">
      <div className="title">
        <h2 className="titleDetails">춤 커뮤니티</h2>
      </div>
      <MapContainer />
      <SearchPlace />
    </div>
  );
}

export default App;
