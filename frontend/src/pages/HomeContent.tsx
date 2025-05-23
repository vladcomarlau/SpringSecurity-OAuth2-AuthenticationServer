import {t} from "i18next";
import {useAuth} from "react-oidc-context";

export default function HomeContent() {
    const auth = useAuth();

    return(
        <div>
            {t('welcome')}, { auth.user?.profile?.sub }!
        </div>
    )
}
