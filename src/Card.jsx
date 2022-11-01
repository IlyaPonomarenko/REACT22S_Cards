import "./Card.css";

const Card = (props) =>{
    
    return <div className="card-wrap">
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
        <h2>{props.name}</h2>
        <div className="card-info">
            <div>{props.likes}</div>
            <button onClick={props.click}>Add like</button>
        </div>
    </div>
}

export default Card;