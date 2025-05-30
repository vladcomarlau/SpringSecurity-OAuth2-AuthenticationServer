import LogoutButton from "../components/auth/LogoutButton.tsx";
import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";
import RedirectSetter from "../components/auth/RedirectSetter.tsx";

export default function Profile() {
    const auth = useAuth();
    const { t } = useTranslation();

    RedirectSetter();

    const name = auth.user?.profile?.sub ?? "";

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.profile')}</div>
            <div>{t('field.name', {name})}</div>
            <LogoutButton />
        </>
    )
}
