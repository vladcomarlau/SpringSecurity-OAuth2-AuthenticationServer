import {useAuth, useAutoSignin} from "react-oidc-context";
import LoginButton from "../components/LoginButton.tsx";
import LogoutButton from "../components/LogoutButton.tsx";

export default function Home() {
    const { isLoading, isAuthenticated, error } = useAutoSignin({signinMethod: "signinRedirect"});
    const auth = useAuth();
    return(
        <div>
            Business Management Home
            { isAuthenticated ?
                <div >
                    Welcome, { auth.user?.profile?.sub }!
                    <LogoutButton />
                </div>
                :
                <LoginButton />
            }

            { isLoading && <div>Loading...</div>}

            { error && <div>Error: { error.message }</div>}
        </div>
    )
}
