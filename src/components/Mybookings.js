import React from 'react'
import BookingCard from './BookingCard'

function Mybookings() {
    return (
        <div className='shadow rounded-3 p-5'>
            <h3 className='text-center'>My Bookings</h3>
            <div className='' >
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
            </div>
        </div>
    )
}

export default Mybookings
