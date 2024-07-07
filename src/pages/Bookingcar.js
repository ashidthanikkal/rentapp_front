import React, { useContext, useEffect, useState } from 'react';
import { Divider, DatePicker } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { bookCarApi, getCarByIdApi } from '../services/allApis';
import { baseUrl } from '../services/commonApi';
import './Bookingcar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { paymentContext } from '../services/Context';

const { RangePicker } = DatePicker;

function Bookingcar() {
    window.scrollTo(0, 0);

    const { setBookingDetails } = useContext(paymentContext)
    const navigate = useNavigate()

    const [isLogedIn, setIsLogedIn] = useState(false);
    const [car, setCar] = useState({});
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [days, setDays] = useState(1);
    const { carId } = useParams();

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            setIsLogedIn(true);
        }
    }, []);

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

    const selectTimeSlots = (dates) => {
        if (dates) {
            const fromDate = new Date(dates[0].format('YYYY-MM-DD'));
            const toDate = new Date(dates[1].format('YYYY-MM-DD'));
            const daysDiff = (toDate - fromDate) / (1000 * 60 * 60 * 24) + 1;

            setFrom(fromDate.toLocaleDateString('en-GB'));
            setTo(toDate.toLocaleDateString('en-GB'));
            setDays(daysDiff);
        }
    };

    const totalAmount = car?.rentamount ? car.rentamount * days : 0;

    const isContinuousDate = (current, bookedSlot) => {
        const slotFrom = new Date(bookedSlot.from.split('/').reverse().join('-'));
        const slotTo = new Date(bookedSlot.to.split('/').reverse().join('-'));

        const prevDate = new Date(slotFrom);
        prevDate.setDate(prevDate.getDate() - 1);

        const nextDate = new Date(slotTo);
        nextDate.setDate(nextDate.getDate() + 1);

        return current.isSame(prevDate, 'day') || current.isSame(nextDate, 'day');
    };

    const disabledDate = (current) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (current && current < today) {
            return true;
        }

        if (car.bookedTimeSlots) {
            return car.bookedTimeSlots.some(slot => {
                const from = new Date(slot.from.split('/').reverse().join('-'));
                const to = new Date(slot.to.split('/').reverse().join('-'));
                return (current >= from && current <= to) || isContinuousDate(current, slot);
            });
        }

        return false;
    };

    const bookNow = async () => {
        if (!from || !to) {
            alert("Please select a date range.");
            return;
        }

        // const reqObj = {
        //     days,
        //     totalAmount,
        //     bookedTimeSlot: [{
        //         from,
        //         to
        //     }],
        //     transactionId: ""
        // };

        // const token = localStorage.getItem("token");

        // const headerConfig = {
        //     "Content-Type": "application/json",
        //     "access_token": `Bearer ${token}`
        // };
        // try {
        //     const response = await bookCarApi(carId, reqObj, headerConfig);
        //     console.log(response);
        //     alert("Booking Successful");
        // } catch (error) {
        //     console.log(error);
        //     alert("Booking failed");
        // }
        setBookingDetails({
            days,
            totalAmount,
            bookedTimeSlot: [{
                from,
                to
            }],
            transactionId: ""
        })

        localStorage.setItem("fromDate", from)
        localStorage.setItem("toDate", to)



        navigate(`/payment/${days}/${carId}`)
    };




    return (
        <div className='min-vh-100'>
            <Header />
            {/* <Container >
                <Link to={'/home'} style={{ textDecoration: "none" }}>
                    <h6 className='text-start'><i className="fa-solid fa-arrow-left"></i> Back To Home</h6>
                </Link>
            </Container> */}
            <div className='booking-container mt-5'>
                
                <Row className='d-flex align-items-center justify-content-center p-2'>
                <Link to={'/home'} style={{ textDecoration: "none" }}>
                    <h6 className='text-start'><i className="fa-solid fa-arrow-left"></i> Back To Home</h6>
                </Link>

                    <Col lg={6} md={6} sm={12} className='mb-4'>
                        <img className='car-image' src={`${baseUrl}/uploads/${car.carimage}`} alt="Car" />
                    </Col>

                    <Col lg={6} md={6} sm={12} className='car-info p-3'>
                        <Divider type='horizontal' dashed>Car Info</Divider>
                        <div className='car-details'>
                            <h6>{car?.title}</h6>
                            <h6><b>{car?.rentamount}$</b><sub>/day</sub></h6>
                            <h6>Max Person: {car?.seat}</h6>
                            <h6>Manual/Auto: {car?.cartype}</h6>
                            <h6>Mileage: {car?.milage} Km</h6>
                        </div>
                        <Divider type='horizontal' dashed>Select Time Slot</Divider>
                        <div className='text-end booking-details'>
                            <RangePicker
                                format='DD MM YYYY'
                                onChange={selectTimeSlots}
                                disabledDate={disabledDate}
                            />
                            <h6>Days: {days} Day{days !== 1 ? 's' : ''}</h6>
                            <h6>Rent Per Day: {car?.rentamount}$</h6>
                            <h6>Total: <span style={{ color: "green" }}>{totalAmount}$</span></h6>

                            {isLogedIn ?
                                <button onClick={bookNow} disabled={from === null && to === null} className='booking-btn'>Book Now</button>
                                :
                                <Link to={'/authentication'}><button className='booking-btn'>Book Now</button></Link>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Bookingcar;
