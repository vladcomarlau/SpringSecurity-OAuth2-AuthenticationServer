import {useAuth} from "react-oidc-context";

export default function LoginButton() {
    const auth = useAuth();
    return(
        <div className="btn btn-neutral m-1" onClick={() => void auth.signinRedirect()}>
            Log in
        </div>
    )
}
