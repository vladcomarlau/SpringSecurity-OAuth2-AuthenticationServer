import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    return(
        <footer className="flex items-center justify-center text-sm font-light bg-gray-200 h-20">
            {t('title.footer')}
        </footer>
    )
}