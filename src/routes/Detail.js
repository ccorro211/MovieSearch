import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Detail(){
    const { id } = useParams()
    console.log(id)
    let a=useSelector((state)=>state.state1)
    let movie=a.movies.find(e=>e.imdbID===id)
    console.log(movie)
    return (
        <div>
            <img src={movie.Poster} />
        </div>
    )
}