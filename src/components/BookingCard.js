import React from 'react'
import { deleteBookingApi } from '../services/allApis'

function BookingCard({viewMyBookings, getMyBookings}) {

    const handleDelete=async(e,id)=>{
        e.preventDefault()

        if(localStorage.getItem("token")){
            const token=localStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "access_token": `Bearer ${token}`
            }
            const result=await deleteBookingApi(reqHeader,id)
            console.log(result);
            if(result.status==200){
                alert("Cancel your booking")
                getMyBookings()
            }
        }
    }    

    return (
        <div>
            <div className='bookings d-flex flex-wrap justify-content-around align-items-center shadow p-2 mt-3'>
                <div>
                    <h6>Car Name: {viewMyBookings.title}</h6>
                    <h6>No of Day : {viewMyBookings.days}</h6>
                    <h6>Rent Per Day: {viewMyBookings.rentamount}$</h6>
                    <h6>Total amount: <span className='text-success'>{viewMyBookings.totalAmount}$</span></h6>
                </div>

                <div>
                    <h6>Transaction Id: <span className='text-success'>{viewMyBookings.bookingId}</span></h6>
                    <h6>From: <span className='text-danger'>{viewMyBookings?.bookedTimeSlot[0]?.from}</span></h6>
                    <h6>To: <span className='text-danger'>{viewMyBookings?.bookedTimeSlot[0]?.to}</span></h6>
                    <h6>Date of Booking: {viewMyBookings?.timestamp.slice(0, 10).split('-').reverse().join('/')}</h6>
                </div>

                <div>
                    <button onClick={(e)=>handleDelete(e,viewMyBookings.bookingId)} className='btn btn-danger' type="button">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default BookingCard
