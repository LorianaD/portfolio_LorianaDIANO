import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import getDefaultLocale from "../../helper/translations/getDefaultLocale";

function MainLayout() {

    const [locale, setLocale] = useState(getDefaultLocale);

    useEffect(() => {
        localStorage.setItem("locale", locale);
        document.documentElement.lang = locale;
    }, [locale]);

    // console.log("locale active :", locale);
    // console.log("navigator.language :", navigator.language);
    // console.log("navigator.languages :", navigator.languages);

    return(
        <>
            <Header locale={locale} />
            <Outlet context={{ locale, setLocale }}/>
            <Footer locale={locale} setLocale={setLocale} />
        </>
    )
}

export default MainLayout