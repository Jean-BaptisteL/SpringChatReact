import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

export default function NewChannel() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <h2 className="text-center mb-5">Création d'un salon</h2>
            <Row className="m-0 d-flex justify-content-center">
                <Col md={6} sm={12}>
                    <Form className="m-0">
                        <p className="text-danger text-center">Choisissez un thème dans la liste ou créez en un s'il n'existe pas encore.</p>
                        <Form.Group className="mt-4 mb-3" >
                            <Form.Label>Choisissez un thème : </Form.Label>
                            <Form.Control as="select">
                                <option disabled selected>Thèmes :</option>
                                <option>Thème 1</option>
                                <option>Thème 2</option>
                                <option>Thème 3</option>
                            </Form.Control>
                        </Form.Group>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="collapse-form"
                            aria-expanded={open}
                            className="mb-2"
                        >
                            Votre thème n'existe pas ?
                            </Button>
                        <Collapse in={open}>
                            <div id="collapse-form">
                                <Form.Group className="mb-2">
                                    <Form.Label>Nom du nouveau thème :</Form.Label>
                                    <Form.Control controlId="themeName" type="text" placeholder="Ex: Cuisine"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Description du thème :</Form.Label>
                                    <Form.Control as="textarea" rows={2} placeholder="Un thème pour échanger des recettes !"></Form.Control>
                                </Form.Group>
                            </div>
                        </Collapse>
                        <Form.Group className="mb-2">
                            <Form.Label>Nom du nouveau salon :</Form.Label>
                            <Form.Control controlId="channelName" type="text" placeholder="Ex: Choucroute"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Nombre de place dans le salon :</Form.Label>
                            <Form.Control controlId="channelNbPlace" type="number" min={2} max={100} step={1}></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4">
                            Créer
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}