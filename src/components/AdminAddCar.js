import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCarApi } from '../services/allApis';

function AdminAddCar() {
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);
        setCarInputs({...carInputs,title: "", rentamount: "", milage: "", seat: "", cartype: "", carimage: ""})
    }
    const handleShow = () => setShow(true);

    const [carInputs, setCarInputs] = useState({
        title: "", rentamount: "", milage: "", seat: "", cartype: "", carimage: ""
    })

    const setInputs = (e) => {
        const { name, value } = e.target
        setCarInputs({ ...carInputs, [name]: value })
    }

    console.log(carInputs);

    const [prev,setPrev]=useState("")

    useEffect(()=>{
        if(carInputs.carimage){
          setPrev(URL.createObjectURL(carInputs.carimage))  
        }
        else{
            setPrev("")
        }
    },[carInputs.carimage])

    // console.log(prev);

   const handleAdd=async(e)=>{
    e.preventDefault()
    const {title, rentamount, milage, seat, cartype, carimage}=carInputs
    if(!title || !rentamount|| !milage|| !seat|| !cartype || !carimage){
        alert("Please fill All datas")
    }
    else{
        //header
        if(localStorage.getItem("token")){
            const headerConfig={
                "Content-Type":"multipart/form-data"
            }
            const reqBody=new FormData()
            reqBody.append("title",title)
            reqBody.append("rentamount",rentamount)
            reqBody.append("milage",milage)
            reqBody.append("seat",seat)
            reqBody.append("cartype",cartype)
            reqBody.append("carimage",carimage)

          const result = await addCarApi(reqBody,headerConfig)
          console.log(result);

          if(result.status==(201)){
            alert(`${result.data.title} added successfully`)
            handleClose()
          }
          else{
            alert(result.response.title)
          }

        }
    }

   } 

    return (
        <div>
            <button className='btn btn-dark' onClick={handleShow}>Add Car<b> +</b></button>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Car</Modal.Title>
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
                                        <input type="file" id='img' className='d-none' onChange={(e)=>setCarInputs({...carInputs,["carimage"]:e.target.files[0]})} />
                                        <img src={prev?prev:"https://i.postimg.cc/7PCZ88D4/Screenshot-2024-06-29-120847.png"} className='rounded' style={{ width: "100%" }} alt="" />
                                    </label>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={(e)=>handleAdd(e)}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AdminAddCar;
