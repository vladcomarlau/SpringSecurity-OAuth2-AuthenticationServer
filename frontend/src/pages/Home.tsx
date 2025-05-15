import {LoginButton} from "../components/LoginButton.tsx";
import {LogoutButton} from "../components/Logout.tsx";

export default function Home() {
    return(
        <>
            Business Management Home
            <div>
                {`${import.meta.env.VITE_OIDC_ISSUER}/signin-callback`}
            </div>
            <div>
                <LoginButton />
                <LogoutButton />
            </div>
        </>
    )
}
