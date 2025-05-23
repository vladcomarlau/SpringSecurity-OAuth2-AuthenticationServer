import LogoutButton from "../components/auth/LogoutButton.tsx";
import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";

export default function Profile() {
    const auth = useAuth();
    const { t } = useTranslation();

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.profile')}</div>
            <div>{t('message.welcome')}, { auth.user?.profile?.sub }!</div>
            <LogoutButton />
        </>
    )
}
