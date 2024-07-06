import React, { useEffect } from 'react';
import './Landingpage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

function Landingpage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation in milliseconds
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='landing'>
            <Header></Header>
            <Container>
                <Row className='banner d-flex justify-content-center align-items-center'>
                    <Col lg={6} md={12}>
                        <img style={{ width: "100%" }} src="https://i.postimg.cc/cC75sgzd/Car-rental-pana.png" alt="" />
                    </Col>
                    <Col className='banner_content' lg={6} md={12}>
                        <h1>DriveEase: Where Every Mile Matters</h1>
                        <p>
                        Welcome to DriveEase, where renting a car is designed to be effortless and enjoyable. We offer a diverse selection of vehicles, from sleek sedans to spacious SUVs, ensuring there's a perfect ride for every journey. Our commitment is to provide competitive rates, transparent booking processes, and exceptional customer service. Whether you're traveling for business or pleasure, DriveEase is your trusted partner for convenient, reliable, and memorable car rentals. Join us and experience the simplicity of driving with DriveEase.
                        </p>
                        <Link to={'./home'}><div className='text-center py-3'><button className='car_btn'>Choose your Car</button></div></Link>
                    </Col>
                </Row>

                <div className='about text-center'>
                    <h1> About us </h1>
                    <p>Discover the convenience and benefits of car subscription with DriveEase. Our customer-friendly system ensures a seamless experience for your favorite pick. Enjoy zero down payment, free insurance, and complimentary maintenance and service. With the freedom to return or extend your subscription anytime, DriveEase guarantees your happiness on the road. Choose DriveEase and experience the joy of hassle-free car subscription today.</p>
                </div>

                <div className='all_service_card d-flex justify-content-center gap-4 pt-3'>
                    <div className="service_card service_card1" data-aos="fade-up" data-aos-delay="0">
                        <div className="first-content d-flex flex-column">
                            <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 rounded'>
                                <i className="fa-solid fa-credit-card"></i>
                            </div>
                            <h6>No downpayment</h6>
                        </div>
                        <div className="second-content">
                            <span>
                                <ul>
                                    <li>Access to a Vehicle Without Financial Strain</li>
                                    <li>No need to pay hefty road tax.</li>
                                    <li>Cheaper than EMI</li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className="service_card" data-aos="fade-up" data-aos-delay="200">
                        <div className="first-content d-flex flex-column">
                            <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 rounded'>
                                <i className="fa-solid fa-shield"></i>
                            </div>
                            <h6>Free Insurance</h6>
                        </div>
                        <div className="second-content">
                            <span>
                                <ul>
                                    <li>No additional financial burden of paying for insurance</li>
                                    <li>Comprehensive Coverage</li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className="service_card" data-aos="fade-up" data-aos-delay="400">
                        <div className="first-content d-flex flex-column">
                            <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 rounded'>
                                <i className="fa-solid fa-gears"></i>
                            </div>
                            <h6>Free Servicing</h6>
                        </div>
                        <div className="second-content">
                            <span>
                                <ul>
                                    <li>Cost Savings</li>
                                    <li>24*7 roadside assistance</li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className="service_card" data-aos="fade-up" data-aos-delay="600">
                        <div className="first-content d-flex flex-column">
                            <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 rounded'>
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                            <h6>Zero hidden charges</h6>
                        </div>
                        <div className="second-content">
                            <span>
                                <ul>
                                    <li>Transparent Pricing</li>
                                    <li>Clearly Defined Terms and Conditions</li>         
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className="service_card" data-aos="fade-up" data-aos-delay="800">
                        <div className="first-content d-flex flex-column">
                            <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 rounded'>
                                <i className="fa-solid fa-road"></i>
                            </div>
                            <h6>No Limits</h6>
                        </div>
                        <div className="second-content">
                            <span>
                                <ul>
                                    <li>Option to Switch Cars</li>
                                    <li>Return or extend anytime</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Landingpage;
