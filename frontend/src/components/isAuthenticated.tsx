import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {userManager} from "../service/AuthService.tsx";

export function useIsAuthenticated(setIsLoggedIn: (v: boolean) => void) {
    const navigate = useNavigate();

    useEffect(() => {
        userManager.getUser().then(user => {
            setIsLoggedIn((user && !user.expired) || false);
            if (!user || user.expired) {
                navigate("/", { replace: true });
            } else {
                return user.profile
            }
        });
    }, []);
}