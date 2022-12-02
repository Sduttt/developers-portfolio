import whitearrow from '../assets/white-right-arrow-24.png'
function Fcards({img, head}){
    return(
        <div className="f-card">
            <div className="f-img">
                <img src={img} alt={head} />
            </div>
            <h5 className="f-head">{head}</h5>
            <button className="card-btn card-btn1">Know More <img src={whitearrow} alt="" class="card-arrow" /> </button>
        </div>
    )
}
export default Fcards;