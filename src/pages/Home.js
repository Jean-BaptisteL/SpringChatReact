import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export default function Home() {
    return (
        <>
            <Row className="d-flex justify-content-around m-0" top="xs">
                <Col md={3} sm={12} className="d-flex align-items-stretch">
                    <article className="bg-light p-2 mb-3 flex-fill">
                        <h2 className="text-center">Derniers messages reçus</h2>
                        <ListGroup>
                            <ListGroup.Item>
                                <h3 className="text-center">Salon 1</h3>
                                <Row>
                                    <Col xs={9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
                                    <Col xs={3}><small>De Roger le 16/02/2021</small></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3 className="text-center">Salon 2</h3>
                                <Row>
                                    <Col xs={9}>Fames ac turpis egestas maecenas pharetra.</Col>
                                    <Col xs={3}><small>De Roger le 16/02/2021</small></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3 className="text-center">Salon 3</h3>
                                <Row>
                                    <Col xs={9}>A pellentesque sit amet porttitor eget dolor.</Col>
                                    <Col xs={3}><small>De Roger le 16/02/2021</small></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3 className="text-center">Salon 4</h3>
                                <Row>
                                    <Col xs={9}>Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.</Col>
                                    <Col xs={3}><small>De Roger le 16/02/2021</small></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3 className="text-center">Salon 5</h3>
                                <Row>
                                    <Col xs={9}>Lectus arcu bibendum at varius.</Col>
                                    <Col xs={3}><small>De Roger le 16/02/2021</small></Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </article>
                </Col>
                <Col md={3} sm={12} className="d-flex align-items-stretch">
                    <article className="bg-light p-2 mb-3 flex-fill">
                        <h2 className="text-center">Vos salons de discution</h2>
                        <div>
                            <h3>Thème 1</h3>
                            <ul>
                                <li><a href="#">Salon 1</a></li>
                                <li><a href="#">Salon 2</a></li>
                                <li><a href="#">Salon 3</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Thème 2</h3>
                            <ul>
                                <li><a href="#">Salon 4</a></li>
                                <li><a href="#">Salon 5</a></li>
                                <li><a href="#">Salon 6</a></li>
                            </ul>
                        </div>
                    </article>
                </Col>
                <Col md={3} sm={12} className="d-flex align-items-stretch">
                    <article className="bg-light p-2 mb-3 flex-fill">
                        <h2 className="text-center">Liste d'amis</h2>
                        <div className="overflow-auto">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Amis connectés :
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Amis déconnectés :
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                                <li>Ami</li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </article>
                </Col>
            </Row>
        </>
    );
}