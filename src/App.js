import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header"
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import ListLastEvents from "./components/ListLastEvents/ListLastEvents";

function App() {
  //  const exampleApi =  useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=148c7c932f5773bf4acb1f2afe73569c&hash=96b2839d14971b67fc58573603b433bd')
  //  console.log(exampleApi)
  return (
    <>
      <div >
          <p>Marvel.</p>
          <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="inicio" element={<Home />} />
              <Route path="series" element={<Series />} />
              <Route path="comics" element={<Comics />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
          <ListLastEvents/>
      </div>
    </>
  );
}

export default App;
