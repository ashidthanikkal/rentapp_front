import React, { useEffect, useState } from 'react'


function Payment() {
    const [isLogedIn,setIsLogedIn]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem("userId")){
            setIsLogedIn(true)
        }
    },[])
    console.log(isLogedIn);

  return (
    <div>
      <h1>Payment</h1>
    </div>
  )
}

export default Payment
