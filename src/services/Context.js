import React, { createContext, useEffect, useState } from 'react'
import { getCarApi} from './allApis';

export const authContext = createContext()


function Context({children}) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("role") === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [isAdmin]);


    const [viewCars,setViewCars]=useState([])
    const getCars=async()=>{
       const result=await getCarApi()
       setViewCars(result.data);
    }

    useEffect(()=>{
        getCars()
    },[])
    // console.log(getCars);

    return (
        <div>
            <authContext.Provider value={{ isAdmin, setIsAdmin, viewCars,setViewCars, getCars}}>
                {children}
            </authContext.Provider>
        </div>
    )
}

export default Context
