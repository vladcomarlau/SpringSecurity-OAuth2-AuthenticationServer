import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";

export default function Home() {
    const auth = useAuth();
    const { t } = useTranslation();

    const name = auth.user?.profile?.sub ?? 'there';

    return(
        <div>
            <div className={"text-xl font-bold"}>
                {t('title.home')}
            </div>
            <div>
                {t('message.welcome', {name})}
            </div>
        </div>
    )
}
