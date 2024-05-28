
import { useDispatch, useSelector } from 'react-redux';
import Movieitem from './Movieitem';

export default function MovieList(){

    let a = useSelector((state)=>state.state1)
    console.log(a)

    if(a.movies.length === 0){
        return null
    }else{
        return(
            <div className='movielist'>
                {a.movies[0].map((e)=>{
                    return (
                        <>
                            <Movieitem item={e}/>
                        </>
                    )
                })}
            </div>
        )
    }
    
}