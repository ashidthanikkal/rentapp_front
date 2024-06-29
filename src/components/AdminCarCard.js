import React from 'react'
import './AdminCarCard.css'
import { Link } from 'react-router-dom'

function AdminCarCard() {
  return (
    <div>
              <div className='mt-5'>
                <div className="car_card pt-3">
                    <div className='ms-4'>
                        <h4>Tata Altroz</h4>
                        <h6><b>1000</b><sub>₹/day</sub></h6>
                    </div>
                    <img style={{ width: "100%" }} src="https://i.postimg.cc/DZ0r32hk/Opera-Blue-0-1.png" alt="" />
    
                    <div className='d-flex mt-2 justify-content-center align-items-center gap-4'>
                        <div className='d-flex flex-column align-items-center'>
                            <img style={{ width: "28px" }} src="https://i.postimg.cc/Gh3hkRrS/Screenshot-2024-06-26-174415-removebg-preview.png" alt="" />
                            <p>Auto</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <img style={{ width: "28px" }} src="https://i.postimg.cc/gcH2Xj9Z/Screenshot-2024-06-26-174336-removebg-preview.png" alt="" />
                            <p>5 Seat</p>
                        </div>
                        <div >
                            <i className="fa-solid fa-lg fa-gas-pump ms-3" style={{color:"black"}}></i>
                            <p className='mt-1'>14 Km</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AdminCarCard
