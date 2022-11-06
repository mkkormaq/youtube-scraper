import React, {useEffect, useState, Fragment} from "react";
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
            
             {data.data ?
                data.data.map((item,i)=>(
                    <div key={i} className="upload">
                        <ul>
                            <li>{item.title}</li>
                            <li>Views -- {item.views}</li>
                            <li>When -- {item.when}</li>
                        </ul>
                     </div>
                )) :
                'loading....'}
            
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