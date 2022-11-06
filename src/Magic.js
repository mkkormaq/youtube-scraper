import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Magic(){
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(process.env.REACT_APP_SHEET_API)
            .then((res)=> {
                console.log(res)
                setData(res)
                console.log(data)
            })
            .catch((err)=>console.error(err));
    
    },[])
    return(
        <>
            <h1>Numot the Nummy</h1>
            
            {data.data ?
                data.data.values.map((item,i)=>{
                    if (i>0){
                        return (
                            <div key={i} className="upload">
                                <ul>
                                    <li>{item[0]}</li>
                                    <li>Views -- {item[1]}</li>
                                    <li>When -- {item[2]}</li>
                                </ul>
                            </div>
                        )
                    }
                }) : 'loading....'
            }
            
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