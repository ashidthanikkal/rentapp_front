import React, { createContext, useEffect, useState } from 'react'
import { getUserCarApi } from './allApis';

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


    //get user 

    const [userCars,setUserCars]=useState([])
    const getUserCars=async()=>{
       const result=await getUserCarApi()
       setUserCars(result.data);
    }

    useEffect(()=>{
        getUserCars()
    },[])
    console.log(userCars);

    return (
        <div>
            <authContext.Provider value={{ isAdmin, setIsAdmin, userCars,setUserCars }}>
                {children}
            </authContext.Provider>
        </div>
    )
}

export default Context
