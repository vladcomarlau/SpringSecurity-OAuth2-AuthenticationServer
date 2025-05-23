import {useAutoSignin} from "react-oidc-context";
import LoginButton from "../components/auth/LoginButton.tsx";
import Content from "./Content.tsx";
import LangSwitcher from "../components/locales/LangSwitcher.tsx";
import {useTranslation} from "react-i18next";

export default function Home() {
    const { isLoading, isAuthenticated, error } = useAutoSignin({signinMethod: "signinRedirect"});
    const { t } = useTranslation();

    return(
        <div>
            <LangSwitcher/>
            <div className={"text-2xl font-bold"}>{t('title.app')}</div>

            { isAuthenticated ?
                <div>
                    <Content/>
                </div>
                :
                <LoginButton />
            }

            { isLoading && <div>{t('messages.loading')}</div>}

            { error && <div>{t('messages.error')}: { error.message }</div>}
        </div>
    )
}
