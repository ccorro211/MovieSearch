import axios from "axios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Movieitem(props){
    let a = useSelector((state)=>state.state1)
    return (
        <Link to={"/detail/"+props.item.imdbID}>
           <div className="movieitem">
                <img src={props.item.Poster} className="poster"/>
                <div className="movieinfo">
                    <p>{props.item.Year}</p>
                    <p>{props.item.Title}</p>
                </div>
           </div>
        </Link>
    )
}