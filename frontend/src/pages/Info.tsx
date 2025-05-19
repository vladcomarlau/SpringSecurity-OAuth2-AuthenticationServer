import {useState} from "react";
import {LogoutButton} from "../components/LogoutButton.tsx";
import {useIsAuthenticated} from "../components/isAuthenticated.tsx";

export default function Info() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //useIsAuthenticated(setIsLoggedIn);

    return(
        <>
            Business Management Info

            {isLoggedIn &&
                <>
                    <div><LogoutButton /></div>

                    <div>
                        authorized
                    </div>
                </>
            }
        </>
    )
}
