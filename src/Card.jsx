import "./Card.css";

const Card = (props) =>{
    
    return <div className="card-wrap">
        <button className="remove" onClick={props.deleteCard.bind(this, props.name)}>X</button> 
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
        <h2>{props.name}</h2>
        <div className="card-info">
            <div className="likes">♥{props.likes}</div>
            <button className="likeBtn" onClick={props.addLike.bind(this, props.name, props.likes)}>Like</button>
            <button className="disBtn" onClick={props.removeLike.bind(this, props.name, props.likes)}>Dislike</button>
        </div>
    </div>
}

export default Card;