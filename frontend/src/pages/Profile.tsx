import {useState} from "react";
import {LogoutButton} from "../components/LogoutButton.tsx";
import {useIsAuthenticated} from "../components/isAuthenticated.tsx";

export default function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //useIsAuthenticated(setIsLoggedIn);

    return(
        <>
            Business Management Profile

            {isLoggedIn &&
            <>
                <div><LogoutButton /></div>
            </>}
        </>
    )
}
