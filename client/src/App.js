import React from 'react'

//react-router
import { BrowserRouter } from "react-router-dom";

//components
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;