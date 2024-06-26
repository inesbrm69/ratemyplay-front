import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Inscription from "./pages/Inscription/Inscription";
import Details from "./pages/Details/Details";
import RollRoverPart1 from "./pages/RollRover/RollRoverPart1";
import RollRoverPart2 from "./pages/RollRover/RollRoverPart2";
import RollRoverPart3 from "./pages/RollRover/RollRoverPart3";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/:userId" element={<Home />} />
      <Route path="/register" element={<Inscription />} />
      <Route path="/game/:userId/:id" element={<Details />} />
      <Route path="/rollRover" element={<RollRoverPart1 />} />
      <Route path="/rollRover/categories/:selectedCategoryIds" element={<RollRoverPart2 />} />
      <Route path="/rollRover/games/:selectedGamesIds" element={<RollRoverPart3 />} />

    </Routes>
  </BrowserRouter>
);

export default Router;
