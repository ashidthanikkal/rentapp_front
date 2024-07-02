import React, { useContext } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import { authContext } from '../services/Context'

function Homepage() {

    console.log("hiii");
    const {viewCars}=useContext(authContext)
    return (
        <div>
            <Header></Header>
            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3' >
               { viewCars?
               viewCars.map(i=>(
                <Card cars={i} ></Card>
               ))
                
                :
                <h2>No Cars</h2>
                }
            </div>

        </div>
    )
}

export default Homepage
