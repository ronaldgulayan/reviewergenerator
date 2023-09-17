import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}

export default App;
