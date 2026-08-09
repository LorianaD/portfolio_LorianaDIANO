import { useOutletContext } from "react-router"
import About from "../components/Sections/Home/About"
import Contact from "../components/Sections/Home/Contact"
import Hero from "../components/Sections/Home/Hero"
import Projects from "../components/Sections/Home/Projects"
import Skills from "../components/Sections/Home/Skills"

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