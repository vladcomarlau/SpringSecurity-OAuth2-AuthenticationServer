import {useAuth} from "react-oidc-context";

export default function LogoutButton() {
    const auth = useAuth();
    return(
        <div className="btn btn-neutral m-1" onClick={() => void auth.signoutRedirect()}>
            Log out
        </div>
    )
}
