import Fcards from "./Fcards"

import Proj1 from "../assets/the_vintage.jpg"
import Proj2 from "../assets/Foodasa.jpg"
import Proj3 from "../assets/Macro_accent.jpg"
import Proj4 from "../assets/Mozaik.jpg"


function Features(){
    return(
    <div className="feature">
        <div className="feature-head">
            <div className="fh-content">
                <h2>FEATURED PROJECTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <button className="feature-btn">VIEW ALL</button>
            </div>
        </div>
        <div className="feature-cards">
            <Fcards img={Proj1} head="The Vintage" />
            <Fcards img={Proj2} head="Foodsa" />
            <Fcards img={Proj3} head="Macro Accent" />
            <Fcards img={Proj4} head="Mozaik" />

        </div>
    </div>
    )
}
export default Features;