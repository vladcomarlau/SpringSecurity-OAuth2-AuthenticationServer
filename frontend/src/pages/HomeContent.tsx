import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";

export default function HomeContent() {
    const auth = useAuth();
    const { t } = useTranslation();

    return(
        <>
            <div className={"text-xl font-bold"}>
                {t('title.home')}
            </div>
            <div>
                {t('message.welcome')}, { auth.user?.profile?.sub }!
            </div>
        </>
    )
}
