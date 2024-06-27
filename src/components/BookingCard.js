import React from 'react'

function BookingCard() {
    return (
        <div>
            <div className='bookings d-flex justify-content-around shadow p-2 mt-3'>
                <div>
                    <h6>Tata Altroz</h6>
                    <h6>No of Day :1</h6>
                    <h6>Rent Per Day:1000</h6>
                    <h6>Total amount:<span className='text-success'>1000</span></h6>
                </div>

                <div>
                    <h6>Transaction Id:123</h6>
                    <h6>From:</h6>
                    <h6>To:</h6>
                    <h6>Date of Booking</h6>
                </div>
            </div>
        </div>
    )
}

export default BookingCard
