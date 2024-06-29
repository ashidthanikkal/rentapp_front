import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AdminAddCar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    <Form.Control type="text" placeholder="Enter Car Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAmount">
                                    <Form.Label> Rent Amount</Form.Label>
                                    <Form.Control type="text" placeholder="Rent Amount" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMilage">
                                    <Form.Label>Milage</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Car Milage" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridSeatnumber">
                                    <Form.Label>No. of Seat</Form.Label>
                                    <Form.Control type="text" placeholder="Enter No. of Seat" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3">
                                    <Col lg={6}>
                                        <Form.Label as="legend" column sm={6}>
                                            Atomatic/Manual
                                        </Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Auto"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Manual"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                    </Col >
                                </Form.Group>
                                <Col lg={6}>
                                    <label htmlFor='img'>
                                        Upload car image
                                        <input type="file" id='img' className='d-none' />
                                        <img src="https://i.postimg.cc/7PCZ88D4/Screenshot-2024-06-29-120847.png" className='rounded' style={{ width: "100%" }} alt="" />
                                    </label>
                                </Col>


                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={handleClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default AdminAddCar
