//importing components
import Nav from "./components/Nav"
import Hero from "./components/Hero";
import Card from "./components/Card";
import Stats from "./components/Stats"; 
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// importing assets
import icon1 from "./assets/card1.svg"
import icon2 from "./assets/card2.svg"
import icon3 from "./assets/card3.svg"



function App() {
    return(
        <>
            <Nav/>
            <Hero/>
            <div className="cards">
                <Card icon={icon1} head="UI Design" para="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <Card icon={icon2} head="Product Design" para="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <Card icon={icon3} head="Branding" para="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </div>
            <Stats/>
            <Features/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App;