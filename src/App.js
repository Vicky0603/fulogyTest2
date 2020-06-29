import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import Constructor from "./pages/Constructor/Construcror";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Constructor/>
    </div>
  );
}

export default App;
