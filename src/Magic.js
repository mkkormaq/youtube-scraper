import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Magic(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://sheet.best/api/sheets/cd2b83ab-0c33-4855-b6c9-ddeed82958d9")
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
            <ul>
                <li>{data.data ? data.data[0].title:'loading...'}</li>
            </ul>
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