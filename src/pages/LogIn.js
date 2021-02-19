import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
// import React , {useState} from 'react';
//
// const [data, upDateData] = React.useState([]);
// const [firstLoad, setLoad] = React.useState(true);
// let isLoading = true;
export default function LogIn() {
//   async function sampleFunc() {
//     let response = await fetch("/login");
//     let body = await response.json();
//     upDateData(body);
//   }
//
//   if (firstLoad) {
//     sampleFunc();
//     setLoad(false);
//   }
    return (
        <>
        <h2 className="text-center">Connexion</h2>
        <Row className="m-0 d-flex justify-content-center">
            <Col md={6} sm={12}>
                <Form>
                    <Form.Group controlId="formName" className="mt-4">
                        <Form.Label>Nom :</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mt-4">
                        <Form.Label>Mot de passe :</Form.Label>
                        <Form.Control type="password" placeholder="monMotDePasse" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-4">
                        Se connecter
                    </Button>
                </Form>
            </Col>
        </Row>
        </>
    );
}
