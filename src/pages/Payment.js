import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCarByIdApi } from '../services/allApis';


function Payment() {
    const [isLogedIn,setIsLogedIn]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem("userId")){
            setIsLogedIn(true)
        }
    },[])
    console.log(isLogedIn);

    const params=useParams()
    const days=params.days
    const carId=params.carId
    // console.log(days);
    // console.log(carId);



    const [car, setCar] = useState({});

    useEffect(() => {
      const fetchCarDetails = async () => {
          try {
              const result = await getCarByIdApi(carId);
              setCar(result.data);
          } catch (error) {
              console.error("Error fetching car details:", error);
          }
      };
      fetchCarDetails();
  }, [carId]);

console.log(car);

  const username=localStorage.getItem("currentUser")


  return (
    <div>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='shadow rounded p-4'>
          <h3>Payment Details</h3>
          <h4 className='text-center'>{username}</h4>
          
        </div>
      </div>
     
    </div>
  )
}

export default Payment
