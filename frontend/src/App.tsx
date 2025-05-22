import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from "./pages/Info.tsx";
import Home from "./pages/Home.tsx";
import SignoutCallback from "./components/SignoutCallback.tsx";
import SigninCallback from "./components/SigninCallback.tsx";
import Thymeleaf from "./components/Thymeleaf.tsx";

function App() {
    return (
        <>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/thymeleaf" element={<Thymeleaf />} />
                    <Route path="/signin-callback" element={<SigninCallback />} />
                    <Route path="/signout-callback" element={<SignoutCallback />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
