import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SigninCallback} from "./components/SigninCallback.tsx";
import Info from "./pages/Info.tsx";
import {SignoutCallback} from "./components/SignoutCallback.tsx";
import Home from "./pages/Home.tsx";

function App() {


    return (
        <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin-callback" element={<SigninCallback />} />
                <Route path="/signout-callback" element={<SignoutCallback />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
