import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

function Homepage() {
    return (
        <div>
            <Header></Header>
            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3' >
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

        </div>
    )
}

export default Homepage
