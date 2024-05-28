
import {  useSelector , useDispatch} from 'react-redux';
import Movieitem from './Movieitem';
import ViewMoreBtn from './ViewMoreBtn';

export default function MovieList(){
    let dispatch = useDispatch();
    let a = useSelector((state)=>state.state1)
    console.log(a)

    if(a.movies.length === 0){
        return (<div className='wait-bar'>
            <p>{a.inputwait}</p>
        </div>)
    }else{
        return(
            <>  
                
                <div className='movielist'>
                    {a.movies.map((e)=>{
                        return (
                            <>
                                <Movieitem item={e}/>
                            </>
                        )
                    })}
                </div>
                <div className={"the-loader "+a.loading}></div>
                <ViewMoreBtn />
            </>
            
        )
    }
    
}