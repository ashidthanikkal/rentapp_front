import React, { createContext, useEffect, useState } from 'react'
import { getCarApi} from './allApis';

export const authContext = createContext()

export const profileUpdateContext=createContext()


function Context({children}) {
    const [isAdmin, setIsAdmin] = useState(false);

    const [editProfile,setEditProfile] = useState("")


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

    const [editUpdate,setEditUpdate]=useState("")

    return (
        <div>
               <profileUpdateContext.Provider value={{editUpdate,setEditUpdate}}>
                    <authContext.Provider value={{ isAdmin, setIsAdmin, viewCars,setViewCars, getCars}}>
                        {children}
                    </authContext.Provider>
               </profileUpdateContext.Provider>
        </div>
    )
}

export default Context
