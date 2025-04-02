import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
