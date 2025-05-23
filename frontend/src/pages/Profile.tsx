import LogoutButton from "../components/auth/LogoutButton.tsx";
import {t} from "i18next";
import {useAuth} from "react-oidc-context";

export default function Profile() {
    const auth = useAuth();

    return(
        <>
            <div>{t('profileTitle')}</div>
            <div>{t('welcome')}, { auth.user?.profile?.sub }!</div>
            <LogoutButton />
        </>
    )
}
