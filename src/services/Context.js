import React, { createContext, useEffect, useState } from 'react'

export const authContext = createContext()


function Context({children}) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("role") === "admin") {
            setIsAdmin(true);
            console.log("true");
        } else {
            setIsAdmin(false);
            console.log("false");
        }
        console.log("outside if");
    }, [isAdmin]);
    return (
        <div>
            <authContext.Provider value={{ isAdmin, setIsAdmin }}>
                {children}
            </authContext.Provider>
        </div>
    )
}

export default Context
