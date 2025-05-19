import {LoginButton} from "../components/LoginButton.tsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../components/context/UserContext.tsx";
import {LogoutButton} from "../components/LogoutButton.tsx";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const userContext = useContext(UserContext);

    useEffect(() => {
        setIsLoggedIn( userContext != null && !userContext.expired );
        setUsername(userContext?.profile.sub || "");
    }, []);

    useEffect(() => {
        setIsLoggedIn( userContext != null && !userContext.expired );
        setUsername(userContext?.profile.sub || "");
    }, [userContext]);

    return(
        <>
            Business Management Home
            { isLoggedIn ?
                <div>
                    Welcome, {username}!
                    <LogoutButton />
                </div>
                :
                <LoginButton />
            }
        </>
    )
}
