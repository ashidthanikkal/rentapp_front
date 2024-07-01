import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import './AdminDash.css';
import { Col, Row } from 'react-bootstrap';
import AdminCarCard from '../components/AdminCarCard';
import ViewUser from './ViewUser';
import AdminAddCar from '../components/AdminAddCar';
import { getAdminCarApi } from '../services/allApis';

function AdminDash() {
    const [view, setView] = useState('default'); // 'default', 'addCar', 'viewUsers', 'bookings'

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const [adminCars,setAdminCars]=useState([])
    const getAdminCars=async()=>{
       const result=await getAdminCarApi()
       setAdminCars(result.data);
    }

    useEffect(()=>{
        getAdminCars()
    },[])
// console.log(adminCars);


    return (
        <div>
            <Sidebar handleViewChange={handleViewChange} />

            <Row className='mt-5 p-5'>
                <Col lg={2}>
                </Col>
                <Col lg={10}>
                    <h1>Welcome Admin...!</h1>

                    {view === 'addCar' && (
                        <div className='add_car'>
                            <AdminAddCar></AdminAddCar>
                            <div className='d-flex flex-wrap gap-3'>
                                {
                                   adminCars?.length>0? 
                                    adminCars.map(i=>(
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
                            <ViewUser></ViewUser>
                        </div>
                    )}

                    {view === 'bookings' && (
                        <div >
                            <div className='bookings  d-flex flex-wrap justify-content-around align-items-center shadow p-2 gap-2 mt-3' >
                                <div>
                                    <h6>Username: Mariya</h6>
                                    <h6>Phone: 9876543210</h6>
                                    <h6>Car: Tata Altroz</h6>
                                    <h6>Rent Per Day:1000</h6>
                                </div>

                                <div>
                                    <h6>Transaction Id:123</h6>
                                    <h6>From:</h6>
                                    <h6>To:</h6>
                                    <h6>No of Day :1</h6>
                                    <h6>Total amount:<span className='text-success'>1000</span></h6>
                                </div>

                                <div>
                                    <button className='btn btn-danger' type="button">Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Col>
            </Row>

        </div >
    );
}

export default AdminDash;
