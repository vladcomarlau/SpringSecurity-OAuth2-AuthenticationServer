import './App.css';
import {Route, Routes} from 'react-router-dom';
import Info from "./pages/Info.tsx";
import Home from "./pages/Home.tsx";
import SignoutCallback from "./components/auth/SignoutCallback.tsx";
import SigninCallback from "./components/auth/SigninCallback.tsx";
import "./config/locale/i18n.tsx"
import Profile from "./pages/Profile.tsx";
import LangSwitcher from "./components/locales/LangSwitcher.tsx";
import {useAutoSignin} from "react-oidc-context";
import {useTranslation} from "react-i18next";
import MenuBar from "./components/MenuBar.tsx";
import Footer from "./components/Footer.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

function App() {
    const { isLoading, error } = useAutoSignin({signinMethod: "signinRedirect"});
    const { t } = useTranslation();

    return (
            <div>
                <LangSwitcher/>
                <div className={"text-2xl font-bold"}>{t('title.app')}</div>
                <MenuBar />

                <div className={"container min-h-100 py-2"}>
                            <Routes>
                                <Route path="/signin-callback/" element={<SigninCallback />} />
                                <Route path="/signout-callback/" element={<SignoutCallback />} />

                                <Route path="/" element={<Home />} />
                                <Route path="/info/" element={<Info />} />
                                <Route path="/profile/" element={<Profile />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Routes>
                </div>

                { isLoading &&
                    <div>
                        <span className="loading loading-bars loading-sm"></span>
                    </div>
                }

                {error &&
                    <div>
                        {t('message.error')}: { error.message }
                    </div>
                }

                <Footer/>
            </div>
    );
}

export default App;
