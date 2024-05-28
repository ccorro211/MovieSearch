import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { changeMovies, changeText } from "../store";
import { useEffect } from "react";

export default function Search(){

    let dispatch = useDispatch()
    let a = useSelector((state) => state.state1)
    useEffect(() => {
        console.log(a)
    })
    
    return (
        <div className="search">
            <input placeholder="Enter the movie title to search!" onKeyUp={(e)=>{
                dispatch(changeText(e.target.value))
                if(e.key === 'Enter' && a.searchText.trim()){
                    axios.get(`https://omdbapi.com/?apikey=7035c60c&s=${a.searchText}&page=${a.page}`).then((res) => {
                        console.log(res.data.Search)
                    })
                    
                }
             }}/>
            <button className="btn btn-primary" onClick={(e)=>{
                axios.get(`https://omdbapi.com/?apikey=7035c60c&s=${a.searchText}&page=${a.page}`)
                .then((res) => {
                    console.log(res.data.Search)
                    dispatch(changeMovies(res.data.Search))   
                })
            }}>Search!</button>
        </div>
    )
}