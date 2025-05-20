import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SigninCallback} from "./components/SigninCallback.tsx";
import Info from "./pages/Info.tsx";
import {SignoutCallback} from "./components/SignoutCallback.tsx";
import Home from "./pages/Home.tsx";
import {useEffect, useState} from "react";
import { UserContext } from './components/context/UserContext.tsx';
import {userManager} from "./service/AuthService.tsx";
import {User} from "oidc-client-ts";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userManager.getUser().then(storedUser => {
            if (storedUser) {
                setUser(storedUser);
            } else {
                userManager.signinSilent()
                    .then(silentUser => setUser(silentUser));
            }
        });

        const onUserLoaded = (loadedUser: User) => {
            setUser(loadedUser);
        };

        userManager.events.addUserLoaded(onUserLoaded);
        return () => {
            userManager.events.removeUserLoaded(onUserLoaded);
        };
    }, []);

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin-callback" element={<SigninCallback />} />
                    <Route path="/signout-callback" element={<SignoutCallback />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
