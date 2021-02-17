import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignIn() {
    return (
        <>
            <h2 className="text-center">Inscription</h2>
            <Row className="m-0 d-flex justify-content-center">
                <Col md={6} sm={12}>
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
                            <Form.Control type="text" placeholder="Entrez votre nom" />
                        </Form.Group>

                        <Form.Group className="mt-4">
                            <Form.Label>Votre image de profil :</Form.Label>
                            <Form.File id="formImage" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-4">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control type="email" placeholder="Entrez votre email" />
                            <Form.Text className="text-muted">
                                Votre adresse email sera gardée secrète.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formAge" className="mt-4">
                            <Form.Label>Age :</Form.Label>
                            <Form.Control type="number" min={16} max={100} step={1} />
                        </Form.Group>

                        <Form.Group controlId="formCity" className="mt-4">
                            <Form.Label>Ville :</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre ville" />
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

                        <Form.Group controlId="formPassword" className="mt-4">
                            <Form.Label>Mot de passe :</Form.Label>
                            <Form.Control type="password" placeholder="monMotDePasse" />
                        </Form.Group>
                        <Form.Group controlId="formPasswordConfirmation">
                            <Form.Label>Confirmez le mot de passe :</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-4">
                            S'inscrire
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}