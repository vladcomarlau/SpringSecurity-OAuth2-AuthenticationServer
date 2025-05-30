import {useTranslation} from "react-i18next";

export default function ErrorPage() {
    const { t } = useTranslation();

    return(
        <>
            <div className={"text-xl font-bold"}>{t('title.error')}</div>
            <div className={""}>{t('message.error.page')}</div>
        </>
    )
}
