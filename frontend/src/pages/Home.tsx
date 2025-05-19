import {LoginButton} from "../components/LoginButton.tsx";
import {useContext, useEffect, useState} from "react";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");


    return(
        <>
            Business Management Home
            { isLoggedIn ?
                <div>
                    Welcome, {username}!
                </div>
                :
                <LoginButton />
            }
        </>
    )
}
