import React from "react";
import {BrowserRouter} from 'react-router-dom';
import LastLaunches from "./components/LastLaunches/LastLaunches";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <LastLaunches/> 

    </div>
  </BrowserRouter>
  );
}

export default App;