import React from "react";
import "./App.css";
import Home from "./components/Home";
import Searchbar from "./components/Searchbar";
import {  Routes, Route, BrowserRouter} from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Equipment from "./components/Equipment";
import Videos from "./components/Videos";
import Target from "./components/Target";




function App() {
  return (
    <BrowserRouter>
   <div className="app">
<Routes>

<Route path="/" element={<><Home /><Searchbar /></>} />
<Route path='/detail/:id' element={<><DetailPage /><Videos /> <Equipment /><Target /></>} />

</Routes>

   </div>
       </BrowserRouter>
  );
}

export default App;
