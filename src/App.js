import React from "react";
import Search from "./components/Search";
import Job from "./components/Jobs";
function App() {
  return (
    <>
      <header>
        <div className="header-center">
          <Search />
        </div>
      </header>
      <Job />
      <footer>
        <p>
          Coded By <span>Digvijay Ghosh</span>
        </p>
      </footer>
    </>
  );
}

export default App;
