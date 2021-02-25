
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Chat from './pages/Chat';
import NewChannel from './pages/NewChannel';
import SimpleTable from './pages/Table';
import FindChannel from './pages/FindChannel';
import Profil from './pages/Profil';
import logo from './defaultImage/logo.PNG';



function App() {
  return (
    <div>
      <header>
        <div className="d-flex justify-content-center">
          <img src={logo} className="img-fluid" id="logo"></img>
          <h1 className="text-center mb-3">Spring Chat</h1>
        </div>
        <Navbar expand="lg" className="p-2 mb-5 shadow" id="nav">
          <Link className="link" to={"/"}><Navbar.Brand className="navLink">Accueil</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="row">
            <Col md={6}>
              <Nav className="mr-auto">
                <Link to={"/findChannel"} className="link"><Nav.Link href="#link" className="navLink">Rechercher un salon</Nav.Link></Link>
                <Link to={"/newChannel"} className="link"><Nav.Link href="#link" className="navLink">Créer un salon</Nav.Link></Link>
              </Nav>
            </Col>
            <Col md={6}>
              <Nav className="justify-content-end">
                <Link to={"/signIn"} className="link"><Nav.Link href="#link" className="navLink">Inscription</Nav.Link></Link>
                <Nav.Link href="http://localhost:8080/home" className="navLink">Connexion</Nav.Link>
                <Link className="link" to={"/chat"}><Nav.Link href="#link" className="navLink">Chat</Nav.Link></Link>
                <Link className="link" to={"/table"}><Nav.Link href="#link" className="navLink">User List</Nav.Link></Link>
                <Link className="link" to={"/profil"}><Nav.Link href="#link" className="navLink">Profil</Nav.Link></Link>
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
          <Route exact path="/table">
            <SimpleTable />
          </Route>
          <Route exact path="/newChannel">
            <NewChannel />
          </Route>
          <Route exact path="/findChannel">
            <FindChannel />
          </Route>
          <Route exact path="/profil">
            <Profil />
          </Route>
        </Switch>
      </section>
      <footer className="text-center bg-light mt-5">
        <p className="text-dark">Application Spring et React développée par Dinehs, Jason et Jean-Baptiste.</p>
      </footer>
    </div>
  );
}

export default App;
