import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export default function SigninCallback() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate("/", { replace: true });
        }
        if (auth.error) {
            navigate("/", { replace: true });
        }
    }, [auth.isAuthenticated, auth.error, navigate]);

    return <div>Signing in...</div>;
}
