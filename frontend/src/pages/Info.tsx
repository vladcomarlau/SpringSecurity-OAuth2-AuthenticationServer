import {useTranslation} from "react-i18next";
import RedirectSetter from "../components/auth/RedirectSetter.tsx";

export default function Info() {
    const { t } = useTranslation();

    RedirectSetter();

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.info')}</div>
        </>
    )
}
