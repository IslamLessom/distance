import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
//components
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;