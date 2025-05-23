import {useAuth} from "react-oidc-context";
import {t} from "i18next";

export default function LoginButton() {
    const auth = useAuth();
    return(
        <div className="btn btn-neutral m-1" onClick={() => void auth.signinRedirect()}>
            {t('logoutButton')}
        </div>
    )
}
