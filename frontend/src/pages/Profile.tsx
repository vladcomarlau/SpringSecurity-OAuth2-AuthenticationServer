import LogoutButton from "../components/auth/LogoutButton.tsx";
import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";

export default function Profile() {
    const auth = useAuth();
    const { t } = useTranslation();
   const name = auth.user?.profile?.sub ?? 'there';

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.profile')}</div>
            <div>{t('field.name', {name})}</div>
            <LogoutButton />
        </>
    )
}
