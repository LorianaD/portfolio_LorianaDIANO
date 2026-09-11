import { useOutletContext } from "react-router"
import { About, Contact, Hero, Projects, Skills } from "../components/Sections/Home";

function HomePage() {

    const { locale } = useOutletContext();
    
    return(
        <main>
            <Hero locale={locale}/>
            <Projects locale={locale}/>
            <Skills locale={locale}/>
            <About locale={locale}/>
            <Contact locale={locale}/>
        </main>
    )
}

export default HomePage