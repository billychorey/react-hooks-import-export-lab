import React from "react";
import Home from "./Home"; // Import default export Home from Home.js
import { username, city } from "../data/user"; // Import named exports username and city from user.js
import About from "./About"; // Import default export About from About.js

function App() {
  return (
    <div className="App">
      <Home username={username} city={city} />
      <About />
    </div>
  );
}

export default App;
