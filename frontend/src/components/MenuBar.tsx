import LangSwitcher from "./locale/LangSwitcher.tsx";

export default function MenuBar(props: { setPage : (page: string) => void}) {
    return(
        <div className={""}>
            <LangSwitcher/>
            <a className={"btn btn-primary btn-outline m-1"} onClick={() => props.setPage("home")}>Home</a>
            <a className={"btn btn-primary btn-outline m-1"} onClick={() => props.setPage("info")}>Info</a>
            <a className={"btn btn-primary btn-outline m-1"} onClick={() => props.setPage("profile")}>Profile</a>
        </div>
    )
}