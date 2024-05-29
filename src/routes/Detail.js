import axios from "axios"
import { useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Detail(){
    const { id } = useParams()
    let [데이터 , 데터변경] = useState([])
    let [해상도 , 해상도변경] =useState(0)

    useMemo(() => {
        axios.get(`https://omdbapi.com?apikey=7035c60c&i=${id}`).then((res)=>{
        console.log(res.data)
        데터변경(res.data)
        let copy = res.data.Poster.replace("SX300", "SX700")
        해상도변경(copy)
    })
    },[id])
    
    
    
    return (
        <div className="container the-movie">
            <div className="detail-poster" style={{backgroundImage:`url(${해상도})`}}></div>
            <div className="detail-specs">
                <div className="detail-title">{데이터.Title}</div>
                <div className="detail-labels">
                    <span>{데이터.Released}</span>
                    &nbsp;/
                    <span>{데이터.Runtime}</span>
                    &nbsp;/
                    <span>{데이터.Country}</span>
                </div>
                <div className="detail-plot">{데이터.Plot}</div>
                <div>
                    <h2>Ratings</h2>
                    { 데이터.Ratings && 데이터.Ratings.map((r) => {
                        return (
                            <><p>{r.Source} , {r.Value}</p></>   
                        )
                    })}
                </div>
                <div>
                    <h2>Actors</h2>
                    <p>{데이터.Actors}</p>
                </div>
                <div>
                    <h2>Director</h2>
                    <p>{데이터.Director}</p>
                </div>
                <div>
                    <h2>Production</h2>
                    <p>{데이터.Production}</p>
                </div>
                <div>
                    <h2>Genre</h2>
                    <p>{데이터.Genre}</p>
                </div>
            </div>
        </div>
    )
}