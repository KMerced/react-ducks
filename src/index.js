import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Duckyalerts from "./pages/Duckyalerts";
import Favoriteducks from "./pages/Favoriteducks";
import Allducks from "./pages/Allducks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="Collection" element ={<Collection/>}/>
        <Route path="Allducks" element ={<Allducks/>}/>
      </Routes>
    </BrowserRouter>
);

