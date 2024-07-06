import React, { useContext, useEffect } from 'react'
import { paymentContext } from '../services/Context';
import { bookCarApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';

function PayPal() {

    const {bookingDetails}=useContext(paymentContext)
    console.log(bookingDetails);
    const carId=localStorage.getItem("currentCarId")
    console.log(carId);

    const navigate=useNavigate()

    const confirmBooking=async()=>{

            const reqObj = {
            days:bookingDetails?.days,
            totalAmount:bookingDetails?.totalAmount,
            bookedTimeSlot: [{
                from:localStorage.getItem("fromDate"),
                to:localStorage.getItem("toDate")
            }],
            transactionId: ""
        };
        const token = localStorage.getItem("token");

        const headerConfig = {
            "Content-Type": "application/json",
            "access_token": `Bearer ${token}`
        };
        try {
            const response = await bookCarApi(carId, reqObj, headerConfig);
            console.log(response);
            navigate('/userdash')
            alert("Booking Successful");
        } catch (error) {
            console.log(error);
            alert("Booking failed");
        }
    }


console.log(bookingDetails.totalAmount);
    useEffect(()=>{

        try{
            const paypalButtonContainer = document.getElementById(
                "paypal"
              );
          
              if (paypalButtonContainer && paypalButtonContainer.children.length === 0) {
    
                window.paypal.Buttons({
    
                    createOrder: function (data, actions) {
                
                      return actions.order.create({
                
                        purchase_units: [{
                          amount: { value: bookingDetails?.totalAmount?.toString() }
                        }]
                
                      })
                    },
                
                    onApprove: function (data, actions) {
                
                      return actions.order.capture().then(function (details) {
                        confirmBooking(details.id)
                        // alert("Transaction completed by" + details.payer.name.given_name)
                
                      })
                
                    }
                  }).render("#paypal")
            
    
              }
        }
        catch(error){
            console.log(error);
        }

    },[bookingDetails])

    
  return (
    <div id='paypal'>
      
    </div>
  )
}

export default PayPal
