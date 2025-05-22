import {useAuth} from "react-oidc-context";
import LoginButton from "../components/LoginButton.tsx";
import LogoutButton from "../components/LogoutButton.tsx";

export default function Home() {
    const auth = useAuth();
    return(
        <div>
            Business Management Home
            { auth.isAuthenticated ?
                <div >
                    Welcome, { auth.user?.profile?.sub }!
                    <LogoutButton />
                </div>
                :
                <LoginButton />
            }

            { auth.isLoading && <div>Loading...</div>}

            { auth.error && <div>Error: { auth.error.message }</div>}
        </div>
    )
}
