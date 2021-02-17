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
                <Col md={6} sm={12}>
                    <Card style={{ height: '600px' }} className="overflow-auto">
                        <Card.Header className="text-center"><h2>Nom du salon</h2></Card.Header>
                        <Card.Body>
                            <div className="w-75 d-flex">
                                <img src={img} style={{height:'40px', width:'40px'}}></img>
                                <div className="m-1 w-100 rounded border">
                                    <p>Blablalblablablablablablablablablablabla</p>
                                    <small>par Roger le 17/02/2021 à 16:58</small>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <InputGroup>
                                <Form.Group controlId="formName" className="w-75">
                                    <Form.Control type="text" placeholder="Entrez votre message" />
                                </Form.Group>
                                <InputGroup.Append>
                                    <Button variant="primary" type="submit"><ArrowRightCircleFill className="mb-1"></ArrowRightCircleFill></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                </Col>
            </Row>
        </>
    );
}