import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import { getUserCarApi } from '../services/allApis'
import { authContext } from '../services/Context'

function Homepage() {

    // const [userCars,setUserCars]=useState([])
    // const getUserCars=async()=>{
    //    const result=await getUserCarApi()
    //    setUserCars(result.data);
    // }

    // useEffect(()=>{
    //     getUserCars()
    // },[])
    // console.log(userCars);

    const {userCars}=useContext(authContext)
    return (
        <div>
            <Header></Header>
            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3' >
               { userCars?
               userCars.map(i=>(
                <Card cars={i} ></Card>
               ))
                
                :
                <h2>No Cars</h2>
                }
            </div>

        </div>
    )
}

export default Homepage
