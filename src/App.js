import "./App.css";
import "semantic-ui-css/semantic.min.css";
//import { Button, Icon } from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Marvel.</p>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="inicio" element={<Home />} />
              <Route path="series" element={<Series />} />
              <Route path="comics" element={<Comics />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <nav>
              <Link to="/comics">Comics</Link>
              <Link to="/series">Series</Link>
            </nav>
          </BrowserRouter>


        </header>

      </div>

    </>
  );
}

export default App;
