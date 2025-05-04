import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login.tsx";

function App() {
    console.log(import.meta.env.VITE_BASE_URL);
    return (
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/info" element={<Info/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
