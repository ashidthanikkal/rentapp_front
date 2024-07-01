import React from 'react'
import './AdminCarCard.css'
import { Link } from 'react-router-dom'
import EditAdminCard from './EditAdminCard'
import { baseUrl } from '../services/commonApi'

function AdminCarCard({cars}) {
  return (
    <div>
              <div className='mt-5'>
                <div className="car_card pt-3">
                    <div className='ms-4 d-flex justify-content-around'>

                       <div>
                            <h4>{cars?.title}</h4>
                            <h6><b>{cars?.rentamount}</b><sub>₹/day</sub></h6>
    
                       </div>
                        <div className='d-flex align-items-center'>
                        <EditAdminCard></EditAdminCard>
                        <i className="fa-solid fa-lg fa-trash ms-3 text-danger" style={{color:"black"}}></i>
                        </div>


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
        </div>
    </div>
  )
}

export default AdminCarCard
