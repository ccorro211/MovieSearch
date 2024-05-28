import { useDispatch ,useSelector} from "react-redux"
import { addMovie, changeMovies, changePage, changeViewPage } from "../store"
import axios from "axios"
import Search from './Search';
import { useState } from "react";

export default function ViewMoreBtn(){
    let dispatch = useDispatch()
    let a = useSelector((state) => state.state1)
    
    
    return (
        <>
            {a.viewpage>10?<button className="btn" onClick={(e)=>{
                
                axios.get(`https://omdbapi.com/?apikey=7035c60c&s=${a.searchText}&page=${a.page+1}`).then((res) => {
                    console.log(res.data)
                    dispatch(changePage())
                    dispatch(addMovie(res.data.Search))
                    dispatch(changeViewPage())
                })
            }}>View More</button> : null}
            
        </>
    )
}