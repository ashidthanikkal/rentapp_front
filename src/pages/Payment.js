import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getCarByIdApi } from '../services/allApis';
import { baseUrl } from '../services/commonApi';
import { paymentContext } from '../services/Context';
import PayPal from '../components/PayPal';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';


function Payment() {
  const { bookingDetails } = useContext(paymentContext)


  const [isLogedIn, setIsLogedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsLogedIn(true)
    }
  }, [])
  // console.log(isLogedIn);

  const params = useParams()
  const days = params.days
  const carId = params.carId

  localStorage.setItem("currentCarId", carId)

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

  // console.log(car);

  const username = localStorage.getItem("currentUser")

  // console.log(bookingDetails);

  // const getPaypalClientId = async () => {
  //   const result = await getPaypalIdApi()
  //   setPaypalId(result.data.clientId)
  // }

  // useEffect(() => {
  //   getPaypalClientId()
  // }, [])

  // console.log(paypalId);






  // useEffect(()=>{
  //   if(paypalId) {
  //     const loadPayPalScript = async () => {
  //       paypalDispatch({
  //         type: 'resetOptions',
  //         value: {
  //           'client-id': paypalId,
  //           currency:'USD',
  //         }
  //       });
  //       paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
  //     }
  //       if(!window.paypal){
  //         loadPayPalScript();
  //       }
  //   }
  // },[ paypalId, paypalDispatch])


  // function onApprove(data, actions) {
  //   return actions.order.capture().then(async function (details) {
  //     try {

  //       const reqObj = {
  //         days:bookingDetails?.days,
  //         totalAmount:bookingDetails?.totalAmount,
  //         bookedTimeSlot:bookingDetails?.bookedTimeSlot,
  //         transactionId: bookingDetails?._id
  //     };

  //     const token = localStorage.getItem("token");

  //     const headerConfig = {
  //         "Content-Type": "application/json",
  //         "access_token": `Bearer ${token}`
  //     };
  //         const response = await bookCarApi(carId, reqObj, headerConfig);
  //         console.log(response);
  //         alert("Booking Successful");

  //     } catch (error) {
  //       console.log(error);
  //       alert("Booking failed");
  //     }
  //   }); 
  // }


  // function onError(err) {
  //   // toast.error(err?.message)
  //   alert(err?.message)
  // }

  // function createOrder(data, actions) {
  //   return actions.order
  //   .create({
  //     purchase_units:[
  //       {
  //         amount: {
  //           value:bookingDetails?.totalAmount,
  //         },
  //       },
  //     ],
  //   })
  //   // .then((orderId)=>{
  //   //   return orderId;
  //   // })
  // }




  return (
    <div className='min-vh-100 mt-5'>
      <Header></Header>
      <Container>
        <Link to={'/home'} style={{ textDecoration: "none" }}>
          <h6 className='text-start pt-5'><i className="fa-solid fa-arrow-left"></i> Back To Home</h6>
        </Link>
      </Container>

      <div className='d-flex flex-wrap justify-content-around  align-items-center mt-5'>
        <div className='shadow rounded p-5 text-center'>
          <h3 className='mb-3'>Booking Information</h3>

          <div>
            <img src={`${baseUrl}/uploads/${car.carimage}`} style={{ width: "200px" }} alt="Car" />
          </div>

          <div className='d-flex justify-content-between mt-4'>
            <h6>Car Model: {car.title}</h6>
            <h6>Car Type: {car.cartype}</h6>

          </div>

          <div className='d-flex justify-content-between my-2'>
            <h6>Capacity: {car.seat} person</h6>
            <h6>Milage: {car.milage}Km</h6>
          </div>


          <div className='d-flex justify-content-between '>
            <h6>Rent per Day: <span className='text-success'>{car.rentamount}$</span></h6>
            <h6>Days: {days} Day{days !== 1 ? 's' : ''}</h6>
          </div>

          <div className='d-flex justify-content-between mt-2'>
            <h6>From: <span className='text-danger'>{localStorage.getItem("fromDate")}</span></h6>
            <h6>To: <span className='text-danger'>{localStorage.getItem("toDate")}</span></h6>
          </div>


        </div>

        <div className='shadow rounded p-5 text-center'>
          <h3 className='mb-3'>Payment Details</h3>

          {/* <div className='text-center my-4'>
            <h5 >{username}</h5>
          </div> */}

          <div className='d-flex  justify-content-between my-4'>
            <h6>Rent Amount: </h6>
            <h6>{(car.rentamount) * days} $</h6>
          </div>

          <div className='d-flex justify-content-between mb-3'>
            <h6>Discount: </h6>
            <h6 className='text-danger'>0 $</h6>
          </div>

          <div className='d-flex justify-content-between mt-5'>
            <h6>Total Amount: </h6>
            <h6><b className='text-success'>{(car.rentamount) * days}$</b></h6>
          </div>

          {/* <div>
          {!paypalId || isPending ? (
            <div>Loading...</div>
          ) : (
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          )}
        </div> */}

          <PayPal></PayPal>

        </div>

      </div>

    </div>
  )
}

export default Payment
