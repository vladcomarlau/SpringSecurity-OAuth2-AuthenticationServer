import {useTranslation} from "react-i18next";

export default function Info() {
    const { t } = useTranslation();

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.info')}</div>
        </>
    )
}
