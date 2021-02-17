
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Chat from './pages/Chat';

function App() {
  return (
    <div>
      <header>
        <h1 className="text-center">Spring Chat</h1>
        <Navbar bg="light" expand="lg" className="p-2 mb-5">
          <Link className="link" to={"/"}><Navbar.Brand>Accueil</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="row">
            <Col md={6}>
              <Nav className="mr-auto">
                <Link className="link"><Nav.Link href="#link">Trouver un salon</Nav.Link></Link>
                <Link className="link"><Nav.Link href="#link">Créer un salon</Nav.Link></Link>
              </Nav>
            </Col>
            <Col md={6}>
              <Nav className="justify-content-end">
                <Link to={"/signIn"} className="link"><Nav.Link href="#link">Inscription</Nav.Link></Link>
                <Link className="link" to={"/logIn"}><Nav.Link href="#link">Connexion</Nav.Link></Link>
                <Link className="link" to={"/chat"}><Nav.Link href="#link">Chat</Nav.Link></Link>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <section id="pageBody">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/logIn">
            <LogIn />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </section>
      <footer className="text-center bg-light mt-5">
        <p className="text-dark">Application Spring et React développé par Dinehs, Jason et Jean-Baptiste.</p>
      </footer>
    </div>
  );
}

export default App;
