import { useState } from "react";
import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import img from '../defaultImage/defaultProfil.png';
import { PersonPlus } from 'react-bootstrap-icons';
import { PersonX } from 'react-bootstrap-icons';

export default function Profil() {

    const [open, setOpen] = useState(false);
    const [data, upDateData] = React.useState([]);
    const [dataFriends, upDateDataFriends] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;

    async function sampleFunc() {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        };
        let response = await fetch('/users/1', headers);
        let body = await response.json();
        let responseFriends = '';
        upDateData(body);
        await data.friends?.map((friend) => (
            responseFriends += (fetch('/users/'+ friend.id, headers).json())
        ));
        upDateDataFriends(responseFriends);
    }

    if (firstLoad) {
        sampleFunc();
        setLoad(false);
    }

    if (data.length > 0) isLoading = false;

    return (
        <>
            <h2 className="text-center">Profil</h2>
            <Row className="m-0 d-flex justify-content-center">
                <Col sm={12} md={5} className="border rounded">
                    <div className="d-flex justify-content-center">
                        <img src={img} style={{ height: '130px', width: 'auto' }} className="mt-2 img-thumbnail"></img>
                    </div>
                    <h3>Nom :</h3>
                    <p>{data.username}</p>
                    <h3>Adresse mail :</h3>
                    <p>{data.email}</p>
                    <h3>Age :</h3>
                    <p>{data.age} ans</p>
                    <h3>Sexe :</h3>
                    <p>{data.sexe}</p>
                    <h3>Département :</h3>
                    <p>{data.departement}</p>
                    <h3>Ville :</h3>
                    <p>{data.ville}</p>
                    <div className="d-flex justify-content-end">
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="collapse-form"
                            aria-expanded={open}
                            className="mb-2"
                        >
                            Modifier
                            </Button>
                    </div>
                </Col>
                <Collapse in={open}>
                    <Col md={5} sm={12}>
                        <Form>
                            <Form.Group controlId="formSex" className="mt-4">
                                <Form.Label>Votre sexe</Form.Label>
                                <Form.Control as="select">
                                    <option disabled selected>Sexe</option>
                                    <option>Homme</option>
                                    <option>Femme</option>
                                    <option>Non binaire</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formName" className="mt-4">
                                <Form.Label>Nom :</Form.Label>
                                <Form.Control type="text" value={data.username} />
                            </Form.Group>

                            <Form.Group className="mt-4">
                                <Form.Label>Votre image de profil :</Form.Label>
                                <Form.File id="formImage" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mt-4">
                                <Form.Label>Adresse email</Form.Label>
                                <Form.Control type="email" value={data.email} />
                                <Form.Text className="text-muted">
                                    Votre adresse email sera gardée secrète.
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formAge" className="mt-4">
                                <Form.Label>Age :</Form.Label>
                                <Form.Control type="number" min={16} max={100} step={1} value={data.age} />
                            </Form.Group>

                            <Form.Group controlId="formDepartement" className="mt-4">
                                <Form.Label>Département :</Form.Label>
                                <Form.Control as="select">
                                    <option disabled selected>Votre département</option>
                                    <option>01 	Ain</option>
                                    <option>02 	Aisne</option>
                                    <option>03 	Allier</option>
                                    <option>04 	Alpes-de-Haute-Provence</option>
                                    <option>05 	Hautes-Alpes</option>
                                    <option>06 	Alpes-Maritimes</option>
                                    <option>07 	Ardèche</option>
                                    <option>08 	Ardennes</option>
                                    <option>09 	Ariège</option>
                                    <option>10 	Aube</option>
                                    <option>11 	Aude</option>
                                    <option>12 	Aveyron</option>
                                    <option>13 	Bouches-du-Rhône</option>
                                    <option>14 	Calvados</option>
                                    <option>15 	Cantal</option>
                                    <option>16 	Charente</option>
                                    <option>17 	Charente-Maritime</option>
                                    <option>18 	Cher</option>
                                    <option>19 	Corrèze</option>
                                    <option>2A 	Corse-du-Sud</option>
                                    <option>2B 	Haute-Corse</option>
                                    <option>21 	Côte-d'Or</option>
                                    <option>22 	Côtes d'Armor</option>
                                    <option>23 	Creuse</option>
                                    <option>24 	Dordogne</option>
                                    <option>25 	Doubs</option>
                                    <option>26 	Drôme</option>
                                    <option>27 	Eure</option>
                                    <option>28 	Eure-et-Loir</option>
                                    <option>29 	Finistère</option>
                                    <option>30 	Gard</option>
                                    <option>31 	Haute-Garonne</option>
                                    <option>32 	Gers</option>
                                    <option>33 	Gironde</option>
                                    <option>34 	Hérault</option>
                                    <option>35 	Ille-et-Vilaine</option>
                                    <option>36 	Indre</option>
                                    <option>37 	Indre-et-Loire</option>
                                    <option>38 	Isère</option>
                                    <option>39 	Jura</option>
                                    <option>40 	Landes</option>
                                    <option>41 	Loir-et-Cher</option>
                                    <option>42 	Loire</option>
                                    <option>43 	Haute-Loire</option>
                                    <option>44 	Loire-Atlantique</option>
                                    <option>45 	Loiret</option>
                                    <option>46 	Lot</option>
                                    <option>47 	Lot-et-Garonne</option>
                                    <option>48 	Lozère</option>
                                    <option>49 	Maine-et-Loire</option>
                                    <option>50 	Manche</option>
                                    <option>51 	Marne</option>
                                    <option>52 	Haute-Marne</option>
                                    <option>53 	Mayenne</option>
                                    <option>54 	Meurthe-et-Moselle</option>
                                    <option>55 	Meuse</option>
                                    <option>56 	Morbihan</option>
                                    <option>57 	Moselle</option>
                                    <option>58 	Nièvre</option>
                                    <option>59 	Nord</option>
                                    <option>60 	Oise</option>
                                    <option>61 	Orne</option>
                                    <option>62 	Pas-de-Calais</option>
                                    <option>63 	Puy-de-Dôme</option>
                                    <option>64 	Pyrénées-Atlantiques</option>
                                    <option>65 	Hautes-Pyrénées</option>
                                    <option>66 	Pyrénées-Orientales</option>
                                    <option>67 	Bas-Rhin</option>
                                    <option>68 	Haut-Rhin</option>
                                    <option>69 	Rhône</option>
                                    <option>70 	Haute-Saône</option>
                                    <option>71 	Saône-et-Loire</option>
                                    <option>72 	Sarthe</option>
                                    <option>73 	Savoie</option>
                                    <option>74 	Haute-Savoie</option>
                                    <option>75 	Paris</option>
                                    <option>76 	Seine-Maritime</option>
                                    <option>77 	Seine-et-Marne</option>
                                    <option>78 	Yvelines</option>
                                    <option>79 	Deux-Sèvres</option>
                                    <option>80 	Somme</option>
                                    <option>81 	Tarn</option>
                                    <option>82 	Tarn-et-Garonne</option>
                                    <option>83 	Var</option>
                                    <option>84 	Vaucluse</option>
                                    <option>85 	Vendée</option>
                                    <option>86 	Vienne</option>
                                    <option>87 	Haute-Vienne</option>
                                    <option>88 	Vosges</option>
                                    <option>89 	Yonne</option>
                                    <option>90 	Territoire de Belfort</option>
                                    <option>91 	Essonne</option>
                                    <option>92 	Hauts-de-Seine</option>
                                    <option>93 	Seine-St-Denis</option>
                                    <option>94 	Val-de-Marne</option>
                                    <option>95 	Val-D'Oise</option>
                                    <option>971 Guadeloupe</option>
                                    <option>972 Martinique</option>
                                    <option>973 Guyane</option>
                                    <option>974 La Réunion</option>
                                    <option>976 Mayotte</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formCity" className="mt-4">
                                <Form.Label>Ville :</Form.Label>
                                <Form.Control type="text" value={data.ville} />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mt-4">
                                <Form.Label>Ancien mot de passe :</Form.Label>
                                <Form.Control type="password" placeholder="monMotDePasse" />
                            </Form.Group>
                            <Form.Group controlId="formPasswordConfirmation">
                                <Form.Label>Nouveau mot de passe :</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group controlId="formPasswordConfirmation">
                                <Form.Label>Confirmer le nouveau mot de passe :</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-4">
                                Enregistrer
                                </Button>
                        </Form>
                    </Col>
                </Collapse>
            </Row>

            <Row className="m-0 mt-4 d-flex justify-content-center">
                <Col sm={12} md={5} className="border rounded">
                    <h3 className="text-center">Liste d'amis</h3>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" variant="outline-success">Ajouter un ami <PersonPlus className="mb-1" /></Button>
                    </div>
                    <div className="overflow-auto">
                        <ul style={{ listStyle: "none" }}>
                            {dataFriends.map(row => (
                                <li className="d-flex mt-2 border-bottom pb-1" key={row.name}>
                                    <p className="mr-auto w-75 mb-0">{row.username}</p>
                                    <div className="d-flex justify-content-end w-25">
                                        <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                    </div>
                                </li>
                            ))}
                            <li className="d-flex mt-2 border-bottom pb-1">
                                <p className="mr-auto w-75 mb-0">Ami 1</p>
                                <div className="d-flex justify-content-end w-25">
                                    <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                </div>
                            </li>
                            <li className="d-flex mt-2 border-bottom pb-1">
                                <p className="mr-auto w-75 mb-0">Ami 2</p>
                                <div className="d-flex justify-content-end w-25">
                                    <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                </div>
                            </li>
                            <li className="d-flex mt-2 border-bottom pb-1">
                                <p className="mr-auto w-75 mb-0">Ami 3</p>
                                <div className="d-flex justify-content-end w-25">
                                    <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                </div>
                            </li>
                            <li className="d-flex mt-2 border-bottom pb-1">
                                <p className="mr-auto w-75 mb-0">Ami 4</p>
                                <div className="d-flex justify-content-end w-25">
                                    <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                </div>
                            </li>
                            <li className="d-flex mt-2 border-bottom pb-1">
                                <p className="mr-auto w-75 mb-0">Ami 1</p>
                                <div className="d-flex justify-content-end w-25">
                                    <Button size="sm" variant="danger"><PersonX className="mb-1" /></Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    );
}