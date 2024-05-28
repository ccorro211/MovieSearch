import Headline from "../components/Headline"
import MovieList from "../components/MovieList"
import Search from "../components/Search"
export default function Home(){
    return (
        <div className="container">
            <Headline />
            <Search />
            <MovieList />
        </div>
    )
}