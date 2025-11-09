import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Duckyalerts from "./pages/Duckyalerts";
import Favoriteducks from "./pages/Favoriteducks";
import Allducks from "./pages/Allducks";
import BrandnameDucks from './pages/BrandnameDucks';
import BullseyesPlayground from './pages/BullseyesPlayground';
import Infantino from './pages/Infantino';
import TubbzCosplayingDucks from './pages/TubbzCosplayingDucks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="Collection" element ={<Collection/>}/>
        <Route path="Duckyalerts" element ={<Duckyalerts/>}/>
        <Route path="Favoriteducks" element ={<Favoriteducks/>}/>
        <Route path="Allducks" element ={<Allducks/>}/>
        <Route path="BrandnameDucks" element ={<BrandnameDucks/>}/>
        <Route path="BullseyesPlayground" element ={<BullseyesPlayground/>}/>
        <Route path="Infantino" element ={<Infantino/>}/>
        <Route path="Tubbz" element ={<TubbzCosplayingDucks/>}/>
      </Routes>
    </BrowserRouter>
);

