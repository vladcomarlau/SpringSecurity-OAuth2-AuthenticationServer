import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function RedirectSetter() {
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem(
            'redirectUrl',
            location.pathname + location.search
        );
    }, []);
}