import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { baseUrl } from '../services/commonApi';
import { editCarApi } from '../services/allApis';
import { authContext } from '../services/Context';


function EditAdminCard({ cars }) {


    const {getCars}=useContext(authContext)


    const [carInputs, setCarInputs] = useState({
        _id: cars?._id,
        title: cars?.title,
        rentamount: cars?.rentamount,
        milage: cars?.milage,
        seat: cars?.seat,
        cartype: cars?.cartype,
        carimage: ""
    })

    const setInputs = (e) => {
        const { name, value } = e.target
        setCarInputs({ ...carInputs, [name]: value })
    }

    const [prev, setPrev] = useState("")

    useEffect(() => {
        if (carInputs.carimage) {
            setPrev(URL.createObjectURL(carInputs.carimage))
        }
        else {
            setPrev("")
        }
    }, [carInputs.carimage])

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)
        setCarInputs({
            _id: cars?._id,
            title: cars?.title,
            rentamount: cars?.rentamount,
            milage: cars?.milage,
            seat: cars?.seat,
            cartype: cars?.cartype,
            carimage: ""
        })
    }
    const handleShow = () =>{ setShow(true);
        setCarInputs({
            _id: cars?._id,
            title: cars?.title,
            rentamount: cars?.rentamount,
            milage: cars?.milage,
            seat: cars?.seat,
            cartype: cars?.cartype,
            carimage: ""
        })
    }


    const handleUpdate = async(e) => {
        e.preventDefault()
        const { title, rentamount, milage, seat, cartype, carimage,_id } = carInputs
        if (!title || !rentamount || !milage || !seat || !cartype ) {
            alert("Please fill All datas")
        }
        else {
            //header-token ,multi-part/form-data
            if (localStorage.getItem("token")) {
                const token = localStorage.getItem("token")
                console.log(token);
                const headerConfig = {
                    "Content-Type":prev?"multipart/form-data": "application/json",
                    "access_token": `Bearer ${token}`
                }
                const reqBody = new FormData()
                reqBody.append("title", title)
                reqBody.append("rentamount", rentamount)
                reqBody.append("milage", milage)
                reqBody.append("seat", seat)
                reqBody.append("cartype", cartype)
                prev?reqBody.append("carimage", carimage):reqBody.append("carimage", cars?.carimage)

                //api call

                const result= await editCarApi(reqBody,headerConfig,_id)
                alert(`${result.data.title} car is updated`)
                getCars()
                handleClose()
            }
        }
    }


            return (
                <div>
                    <i className="fa-solid fa-lg fa-edit ms-3" onClick={handleShow} style={{ color: "black" }}></i>
                    <div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Car Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCarname">
                                            <Form.Label>Car Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                value={carInputs.title}
                                                onChange={setInputs}
                                                placeholder="Enter Car Name"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridAmount">
                                            <Form.Label>Rent Amount</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="rentamount"
                                                value={carInputs.rentamount}
                                                onChange={setInputs}
                                                placeholder="Rent Amount"
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridMilage">
                                            <Form.Label>Milage</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="milage"
                                                value={carInputs.milage}
                                                onChange={setInputs}
                                                placeholder="Enter Car Milage"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridSeatnumber">
                                            <Form.Label>No. of Seat</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="seat"
                                                value={carInputs.seat}
                                                onChange={setInputs}
                                                placeholder="Enter No. of Seat"
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Col lg={6}>
                                                <Form.Label as="legend" column sm={6}>
                                                    Automatic/Manual
                                                </Form.Label>
                                                <Form.Check
                                                    type="radio"
                                                    label="Auto"
                                                    name="cartype"
                                                    id="formHorizontalRadios1"
                                                    value="Auto"
                                                    onChange={setInputs}
                                                    checked={carInputs.cartype === "Auto"}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Manual"
                                                    name="cartype"
                                                    id="formHorizontalRadios2"
                                                    value="Manual"
                                                    onChange={setInputs}
                                                    checked={carInputs.cartype === "Manual"}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Col lg={6}>
                                            <label htmlFor='img'>
                                                Upload car image
                                                <input type="file" id='img' className='d-none' onChange={(e) => setCarInputs({ ...carInputs, ["carimage"]: e.target.files[0] })} />
                                                <img src={prev ? prev : `${baseUrl}/uploads/${cars?.carimage}`} className='rounded' style={{ width: "100%" }} alt="" />
                                            </label>
                                        </Col>
                                    </Row>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button onClick={(e) => handleUpdate(e)} variant="dark">
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            )
        }

        export default EditAdminCard
