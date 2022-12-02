import Mrhero from '../assets/Untitled design (35).png'
function Hero(){
    return(
        <div className="hero">
        <img src={Mrhero} alt="hero" className="hero-img"/>
        <div className="hero-content">
            <h3 className="hero-pre-heading">Hello I'm Arthur</h3>
            <h1 className="hero-heading">Visual Designer</h1>
            <p className="hero-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptate eum ipsam vero unde, quas adipisci recusandae corporis possimus qui!</p>
            <button className="hero-btn">ABOUT ME</button>
        </div>
    </div>
    )
}
export default Hero;