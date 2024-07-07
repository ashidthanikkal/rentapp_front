import React, { useEffect, useState } from 'react'
import BookingCard from './BookingCard'
import { viewMyBookingsApi } from '../services/allApis'

function Mybookings() {

    const [viewMyBookings, setViewMyBookings] = useState({})

    const getMyBookings = async () => {
        const token=localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const headerConfig = {
            "Content-Type":"application/json",
            "access_token": `Bearer ${token}`
        }
        const result = await viewMyBookingsApi(userId,headerConfig)
        console.log(result.data);
        setViewMyBookings(result.data)
    }
    useEffect(() => {
        getMyBookings()
    }, [])

    console.log(viewMyBookings);


    return (
        <div className='p-4 shadow'>
            <h3 className='text-center'>My Bookings</h3>
            <div className='' >

               { viewMyBookings?.length>0?
               viewMyBookings.map(i=>(
                <BookingCard viewMyBookings={i} getMyBookings={getMyBookings} ></BookingCard>

               ))
                :
                <h2>No Bookings</h2>
                }

            </div>
        </div>
    )
}

export default Mybookings
