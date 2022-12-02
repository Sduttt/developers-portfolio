
function Statcard({digit, title}){
    return(
        <div className="stat-card">
            <h2 className="sc-head">{digit}</h2>
            <p className="sc-para">{title}</p>
        </div>
    )
}
export default Statcard;