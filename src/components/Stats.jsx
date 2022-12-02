import Statcard from "./Statcard";

function Stats(){
    return(
        <div className="stats">
        <div className="exp">
            <h1 className="exp-head">12</h1>
            <h5 className="exp-para">years experience</h5>
        </div>
        <div className="stat-cards">
        <Statcard digit="60+" title="Clients" />
        <Statcard digit="08" title="Years experience"/>
        <Statcard digit="122+" title="Completed Projects"/>
        <Statcard digit="10" title="Achivements"/>
        </div>
    </div>
    )
}

export default Stats;