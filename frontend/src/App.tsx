import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from "./pages/Info.tsx";
import Home from "./pages/Home.tsx";


function App() {


    //ai acele events ex: user loaded
    //ai functii async cu await in interior pt getUser in care faci set
    //cauta alte metode sa verifici daca e autentificat cu succes
    //ai exemplele (samples)
    //http-cookies?
    //https://github.com/authts/react-oidc-context

    return (
        <>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
