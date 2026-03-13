import About from "../components/Sections/Home/About"
import Contact from "../components/Sections/Home/Contact"
import Hero from "../components/Sections/Home/Hero"
import Projects from "../components/Sections/Home/Projects"
import Skills from "../components/Sections/Home/Skills"

function HomePage() {
    return(
        <main>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
        </main>
    )
}

export default HomePage