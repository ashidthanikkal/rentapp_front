import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import './AdminDash.css';
import { Col, Row } from 'react-bootstrap';
import AdminCarCard from '../components/AdminCarCard';
import ViewUser from './ViewUser';
import AdminAddCar from '../components/AdminAddCar';
import { authContext } from '../services/Context';
import { deleteBookingApi, viewBookingsApi, viewUserApi } from '../services/allApis';

function AdminDash() {
    const [view, setView] = useState('default'); // 'default', 'addCar', 'viewUsers', 'bookings'

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const { viewCars } = useContext(authContext)

    const [user, setUser] = useState([])
    const getUser = async () => {
        const result = await viewUserApi()
        setUser(result.data);
    }

    useEffect(() => {
        getUser()
    }, [])


    const [userBooking, setUserBookings] = useState({})

    const getBookings = async () => {
        const token=localStorage.getItem('token')

        const headerConfig = {
            "Content-Type":"application/json",
            "access_token": `Bearer ${token}`
        }
        const result = await viewBookingsApi(headerConfig)
        console.log(result.data);
        setUserBookings(result.data)
    }
    useEffect(() => {
        getBookings()
    }, [])

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
            getBookings()
            }
        }
    }    


    return (
        <div className='admin-dash min-vh-100'>
            
            <Row className='mt-5'>
                <Col lg={2}>
                <Sidebar handleViewChange={handleViewChange} />
                </Col>
                <Col lg={10}>
                    <h1 className='pt-5 ms-2'>Welcome Admin...!</h1>

                    {view === 'addCar' && (
                        <div className='add_car ms-2'>
                            <AdminAddCar></AdminAddCar>
                            <div className='d-flex justify-content-center flex-wrap gap-3'>
                                {
                                    viewCars?.length > 0 ?
                                        viewCars.map(i => (
                                            <AdminCarCard cars={i}></AdminCarCard>
                                        ))
                                        :
                                        <h2>No Cars Uploaded yet...!</h2>

                                }
                            </div>
                        </div>
                    )}

                    {view === 'viewUsers' && (
                        <div className='users' style={{ overflowX: "scroll" }}>
                            <ViewUser user={user}></ViewUser>

                        </div>
                    )}

                    {view === 'bookings' && (
                        <div className='p-2' >

                            {
                                userBooking?.length>0?
                                userBooking.map(i=>(
                                    <div className='bookings  d-flex flex-wrap justify-content-lg-around justify-content-sm-evently align-items-center shadow p-2 gap-2 mt-3' >
                                    <div>
                                        <h6>Username: {i?.username}</h6>
                                        <h6>Phone: {i?.phone} </h6>
                                        <h6>Car: {i?.carTitle}</h6>
                                        <h6>Rent Per Day: <span className='text-success'>{i?.rentPerDay}$</span></h6>
                                    </div>
    
                                    <div>
                                        <h6>Transaction Id:<span className='text-success'>{i?.bookingId}</span></h6>
                                        <h6>From:<span className='text-danger'>{i?.from}</span></h6>
                                        <h6>To: <span className='text-danger'>{i?.to}</span></h6>
                                        <h6>No of Day :{i?.days}</h6>
                                        <h6>Total amount:<span className='text-success'>{i?.totalAmount}$</span></h6>
                                    </div>
    
                                    <div>
                                        <button onClick={(e)=>handleDelete(e,i.bookingId)} className='btn btn-danger' type="button">Delete</button>
                                    </div>
                                </div>
    

                                ))
                                :
                                <h2>No Bookings yet...!</h2>
                            }

                        </div>
                    )}
                </Col>
            </Row>

        </div >
    );
}

export default AdminDash;
