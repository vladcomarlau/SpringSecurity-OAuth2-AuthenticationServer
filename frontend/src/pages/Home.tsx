import {useAuth, useAutoSignin} from "react-oidc-context";
import LoginButton from "../components/auth/LoginButton.tsx";
import LogoutButton from "../components/auth/LogoutButton.tsx";
import {useTranslation} from "react-i18next";
import LangSwitcher from "../components/locale/LangSwitcher.tsx";

export default function Home() {
    const { isLoading, isAuthenticated, error } = useAutoSignin({signinMethod: "signinRedirect"});
    const auth = useAuth();
    const { t } = useTranslation();
    return(
        <div>
            <LangSwitcher/>

            {t('title')}

            { isAuthenticated ?
                <div >
                    {t('welcome')}, { auth.user?.profile?.sub }!
                    <LogoutButton />
                </div>
                :
                <LoginButton />
            }

            { isLoading && <div>{t('loading')}</div>}

            { error && <div>{t('error')}: { error.message }</div>}
        </div>
    )
}
