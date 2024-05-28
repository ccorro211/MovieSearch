import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { changeErr, changeLoading, changeMovies, changePage, changeText, changeTotal, changeinputwait, setMovie } from "../store";
import { useEffect } from "react";

export default function Search(){

    let dispatch = useDispatch()
    let a = useSelector((state) => state.state1)
    useEffect(() => {
        console.log(a)
    })
    
    return (
        <>
            <div className="search">
            <input placeholder="Enter the movie title to search!" onKeyUp={(e)=>{
                dispatch(changeText(e.target.value))
                if(e.key === 'Enter' && a.searchText.trim()){
                    axios.get(`https://omdbapi.com/?apikey=7035c60c&s=${a.searchText}&page=1`).then((res) => {
                        console.log(res.data.Search)
                    })
                    
                }
             }}/>
            <button className="btn btn-primary" onClick={(e)=>{
                dispatch(setMovie())
                dispatch(changeLoading(""))
                axios.get(`https://omdbapi.com/?apikey=7035c60c&s=${a.searchText}&page=1`)
                .then((res) => {
                    dispatch(changeErr("Found"))
                    dispatch(changeLoading("hide"))
                    console.log(res.data.Search)
                    dispatch(changeMovies(res.data.Search))
                    console.log(res.data)
                    dispatch(changeTotal(res.data.totalResults)) 
                    
                }).catch((err)=>{
                    dispatch(changeErr("NotFound"))
                    dispatch(changeMovies([]))
                    dispatch(changeTotal(0))
                    dispatch(changePage())
                    dispatch(changeinputwait("Not Found"))
                })
            }}>Search!</button>
        </div>
        <div className={"the-loader "+a.loading}></div>
        </>
        
    )
}

