import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
