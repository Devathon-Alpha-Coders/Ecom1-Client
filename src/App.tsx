import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={'root'} /> {/* 👈 Renders at /app/ */}
        <Route path="/test" element={'test'} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
