import MenuBar from "../components/MenuBar.tsx";
import {useState} from "react";
import HomeContent from "./HomeContent.tsx";
import Info from "./Info.tsx";
import Profile from "./Profile.tsx";

export default function Content() {
    const [currentPage, setPage] = useState<string>("home");

    const pages = new Map();

    pages.set("home", <HomeContent/>);
    pages.set("info", <Info/>);
    pages.set("profile", <Profile/>);

    return(
        <div>
            <MenuBar setPage={setPage}/>

            <div className={"p-1 m-1"}>
                {pages.get(currentPage)}
            </div>
        </div>
    )
}
