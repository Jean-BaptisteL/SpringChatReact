import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import { Search } from 'react-bootstrap-icons';

export default function FindChannel() {
    return (
        <>
            <h2 className="text-center">Rechercher un salon</h2>
            <Tabs defaultActiveKey="byName" id="uncontrolled-tab-example">
                <Tab eventKey="byName" title="Par nom">
                    <Row className="m-0 d-flex justify-content-center">
                        <Col md={6} sm={12}>
                            <InputGroup className="mb-3 mt-3">
                                <FormControl
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    type="text"
                                    placeholder="Nom du salon"></FormControl>
                                <InputGroup.Append>
                                    <Button variant="primary"><Search className="mb-1"></Search></Button>
                                </InputGroup.Append>
                            </InputGroup>

                            <h3 className="mb-3" style={{ fontSize: "1.5em" }}>Les salons trouvés :</h3>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Salon 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 2
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 3
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="byTheme" title="Par thème">
                    <Row className="m-0 d-flex justify-content-center">
                        <Col md={6} sm={12}>
                            <Form.Control as="select" className="mt-3 mb-3">
                                <option disabled selected>Thèmes existants :</option>
                                <option>Thème 1</option>
                                <option>Thème 2</option>
                                <option>Thème 3</option>
                            </Form.Control>
                            <h3 className="mb-3" style={{ fontSize: "1.5em" }}>Les salons trouvés :</h3>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Salon 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 2
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 3
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="byFriends" title="Utilisés par vos amis">
                    <Row className="m-0 d-flex justify-content-center">
                        <Col md={6} sm={12}>
                            <h3 className="m-3" style={{ fontSize: "1.5em" }}>Les salons trouvés :</h3>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Salon 1 utilisé par ami1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 2 utilisé par ami2
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Salon 3 utilisé par ami3
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </>
    );
}