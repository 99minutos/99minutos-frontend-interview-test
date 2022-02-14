import React from "react";
import {BrowserRouter} from 'react-router-dom';
import LastLaunches from "./components/LastLaunches/LastLaunches";

function App() {
  return (
   <BrowserRouter>
   <LastLaunches/> 
  </BrowserRouter>
  );
}

export default App;