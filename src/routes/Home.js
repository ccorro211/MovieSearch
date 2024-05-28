import { useSelector } from "react-redux"
import Headline from "../components/Headline"
import MovieList from "../components/MovieList"
import Search from "../components/Search"

export default function Home(){
    let a = useSelector(state=>state.state1)
    return (
        <div className="container">
            <Headline />
            <Search />
            <MovieList />
        </div>
    )
}