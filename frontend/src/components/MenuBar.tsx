import {useTranslation} from "react-i18next";

export default function MenuBar() {
    const { t } = useTranslation();

    return(
        <div className={"rounded-lg bg-gray-200 p-1"}>

            <a className={"btn btn-primary btn-outline m-1"}
               href={"/"}>
                {t("button.home")}
            </a>

            <a className={"btn btn-primary btn-outline m-1"}
               href={"/info/"}>
                {t("button.info")}
            </a>

            <a className={"btn btn-primary btn-outline m-1"}
               href={"/profile/"}>
                {t("button.profile")}
            </a>
        </div>
    )
}