import {useAutoSignin} from "react-oidc-context";
import LoginButton from "../components/auth/LoginButton.tsx";
import {t} from "i18next";
import Content from "./Content.tsx";

export default function Home() {
    const { isLoading, isAuthenticated, error } = useAutoSignin({signinMethod: "signinRedirect"});

    return(
        <div>
            <div className={"text-2xl font-bold"}>{t('homeTitle')}</div>

            { isAuthenticated ?
                <div>
                    <Content/>
                </div>
                :
                <LoginButton />
            }

            { isLoading && <div>{t('loading')}</div>}

            { error && <div>{t('error')}: { error.message }</div>}
        </div>
    )
}
