import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import img from '../defaultImage/defaultProfil.png';

export default function Chat() {


    return (
        <>
            <Row className="m-0 d-flrx justify-content-around">
                <Col md={7} sm={12}>
                    <Card style={{ height: '600px' }} className="mb-4 shadow-lg">
                        <Card.Header className="text-center" id="chatHeader"><h2>Nom du salon</h2></Card.Header>
                        <Card.Body className="overflow-auto">
                            {/* Message reçu */}
                            <div className="w-100">
                                <div className="w-75 d-flex">
                                    <img src={img} style={{ height: '35px', width: 'auto' }} className="mt-1"></img>
                                    <div className="m-1 w-100">
                                        <p className="rounded-pill border p-2" style={{ minHeight: "40px", marginBottom: "0" }}>Blablalblablablablablablablablablablabla</p>
                                        <p style={{ fontSize: "0.7em" }} className="align-top">par Roger le 17/02/2021 à 16:58</p>
                                    </div>
                                </div>
                            </div>
                            {/* Message envoyé */}
                            <div className="w-100 d-flex justify-content-end">
                                <div className="w-75 d-flex">
                                    <div className="m-1 w-100">
                                        <p className="rounded-pill border p-2" style={{ minHeight: "40px", marginBottom: "0" }}>Blablalblablablablablablablablablablabla</p>
                                        <p style={{ fontSize: "0.7em", textAlign: "right" }} className="text-right">par Vous le 17/02/2021 à 16:59</p>
                                    </div>
                                    <img src={img} style={{ height: '35px', width: 'auto' }} className="mt-1"></img>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <InputGroup>
                                <Form.Group controlId="chatText" className="w-75">
                                    <Form.Control type="text" placeholder="Entrez votre message" />
                                </Form.Group>
                                <InputGroup.Append>
                                    <Button variant="primary" type="submit"><ArrowRightCircleFill className="mb-1"></ArrowRightCircleFill></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <div style={{ height: '600px' }} className="border rounded pt-3 p-2">
                        <h2 className="text-center" style={{ fontSize: "1.5em" }}>Utilisateurs connectés</h2>
                        <hr className="mb-4" />
                        <div className="overflow-auto h-75 w-100">
                            <ul>
                                <li>Roger</li>
                                <li>Charles-Kevin</li>
                                <li>Utilisateur 3</li>
                                <li>Deku</li>
                                <li>Eren Jager</li>
                                <li>Han Solo</li>
                            </ul>
                        </div>
                        <hr className="mb-3" />
                        <div className="d-flex justify-content-end">
                            <Button variant="outline-danger">Quitter le salon</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}