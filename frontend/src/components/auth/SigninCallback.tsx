import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import {useTranslation} from "react-i18next";

export default function SigninCallback() {
    const auth = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate("/", { replace: true });
        }
        if (auth.error) {
            navigate("/", { replace: true });
        }
    }, [auth.isAuthenticated, auth.error, navigate]);

    return <div>{t("message.sign.in")}</div>;
}
