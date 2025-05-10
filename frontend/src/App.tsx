import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login.tsx";

function App() {
    return (
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/authorized/" element={<Info/>} />
                    <Route path="/logged-out/" element={<Login/>} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
