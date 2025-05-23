import {useTranslation} from "react-i18next";

export default function MenuBar(props: { setPage : (page: string) => void}) {
    const { t } = useTranslation();

    return(
        <div className={"rounded-full bg-gray-200 p-1"}>
            <a className={"btn btn-primary btn-outline m-1"}
               onClick={() => props.setPage("home")}>{t("button.home")}</a>
            <a className={"btn btn-primary btn-outline m-1"}
               onClick={() => props.setPage("info")}>{t("button.info")}</a>
            <a className={"btn btn-primary btn-outline m-1"}
               onClick={() => props.setPage("profile")}>{t("button.profile")}</a>
        </div>
    )
}