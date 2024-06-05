// import s from"./style.module.css";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {

// declarer un tableau d'étoile
const starList = [];

//stocker une variable du nombre d'étoile pleine
const starFillCount = Math.floor(rating);
//stocker une variable si il y a une demi etoile 
const hasStarHalf = rating - starFillCount >= 0.5;
//stocker une variable si etoile vide
const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
// pusher etoile pleine
for (let i = 1; i <= starFillCount; i++){
    starList.push(<StarFill key={"star-fill" + i}/>); 
}
//pusher etoile demi
if(hasStarHalf){
    starList.push(<StarHalf key={"star-half"} />);

}
//pusher etoile vide
for (let i = 1; i <= emptyStarCount; i++){
    starList.push(<StarEmpty key={"star-empty" + i}/>); 
}
    return <div>
       {starList}
    </div>;
}