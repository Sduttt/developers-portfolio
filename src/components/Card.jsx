import arrow from '../assets/white-right-arrow-24.png'
function Card({icon, head, para}){
    return(
        <div className="card">
            <img src= {icon} alt="UI" className="card-logo"/>
            <h4 className="card-head"> {head} </h4>
            <p className="card-para"> {para} </p>
            <button className="card-btn">Know More <img src={arrow} alt="" className="card-arrow"/> </button>
        </div>
    )
}
export default Card;