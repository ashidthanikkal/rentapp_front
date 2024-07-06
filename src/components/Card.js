import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { baseUrl } from '../services/commonApi'

function Card({cars}) {
    return (
        <div className='mt-5'>
            <Link  to={`/booking/${cars._id}`}  style={{textDecoration:"none"}}>
                <div className="car_card pt-3">
                    <div className='ms-4'>
                        <h4>{cars?.title}</h4>
                        <h6><b>{cars?.rentamount}$</b><sub>/day</sub></h6>
                    </div>
                    <img style={{ width: "100%",height:"180px" }} src={`${baseUrl}/uploads/${cars?.carimage}`} alt="" />
    
                    <div className='d-flex mt-2 justify-content-center align-items-center gap-4'>
                        <div className='d-flex flex-column align-items-center'>
                            <img style={{ width: "28px" }} src="https://i.postimg.cc/Gh3hkRrS/Screenshot-2024-06-26-174415-removebg-preview.png" alt="" />
                            <p>{cars?.cartype}</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <img style={{ width: "28px" }} src="https://i.postimg.cc/gcH2Xj9Z/Screenshot-2024-06-26-174336-removebg-preview.png" alt="" />
                            <p>{cars?.seat} Seat</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-lg fa-gas-pump ms-3" style={{color:"black"}}></i>
                            <p className='mt-1'>{cars?.milage} Km</p>
                        </div>
                    </div>
                </div>
    
            </Link>
        </div>
    )
}

export default Card
