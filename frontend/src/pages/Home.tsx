import {useAuth} from "react-oidc-context";
import {useTranslation} from "react-i18next";
import RedirectSetter from "../components/auth/RedirectSetter.tsx";

export default function Home() {
    const auth = useAuth();
    const { t } = useTranslation();

    RedirectSetter();

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
