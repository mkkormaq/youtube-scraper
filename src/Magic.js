import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";


export default function Magic(){
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(process.env.REACT_APP_SHEET_API)
            .then((res)=> {
                console.log(res)
                setData(res)
                
            })
            .catch((err)=>console.error(err));
    
    },[])
    const [range, setRange] = useState([1,11])
    console.log(range)


    return(
        <>  
            <div className="buttons">
                {range[0]<10?
                <Fragment />:
                <button className='previous' onClick={() => setRange([range[0]-10, range[1]-10])}>Previous 10</button>}
                <button onClick={() => setRange([range[0]+10, range[1]+10])}>Next 10</button>
            </div>
            {data.data ?
                data.data.values.map((item,i)=>{
                    if (i >= range[0] && i < range[1]){
                        return (
                            <div key={item[3]} className="upload">
                                <iframe width='560' height='315' src={"https://www.youtube.com/embed/" + item[3].slice(item[3].indexOf('=')+1)} frameBorder="0"></iframe>
                                <ul>
                                    <li><a href={item[3]} target='_blank' rel="noreferrer">{item[0]}</a></li>
                                    <li>{item[1]}</li>
                                    <li>{item[2]}</li>
                                </ul>
                            </div>
                        )
                    }
                }) : (
                    <h3>{'loading....'}</h3>
                )
            }
            <div className="buttons">
                {range[0]<10?
                <Fragment />:
                <button className='previous' onClick={() => setRange([range[0]-10, range[1]-10])}>Previous 10</button>}
                <button onClick={() => setRange([range[0]+10, range[1]+10])}>Next 10</button>
            </div>
        </>
    )

}




    //     <>
    //         <h1>Numot the Nummy</h1>
    //         <ul>
    //             {data.map((item,i)=>(
    //                 <Fragment key={i}>
    //                     <li>Title -- {item.title}</li>
    //                     <li>Views -- {item.views}</li>
    //                     <li>When -- {item.when}</li>
    //                 </Fragment>
    //             ))}
    //         </ul>
    //     </>
    // )