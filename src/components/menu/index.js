 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import './index.css';
import usuarioService from '../../service/usuario-service';

import { useLocation } from 'react-router-dom';

function OffcanvasExample() {const logout = () =>{
  usuarioService.sairSistema();
};

if(useLocation().pathname !== '/login')
  return (    
    <>
      {[false ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          
          <Container fluid>
            <Navbar.Brand href= "/">Niversário</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href="/eventos">Eventos</Nav.Link> 
                  <Nav.Link href="/clientes">Cadastrar</Nav.Link>
                  <Nav.Link href="/usuarios">Usuário</Nav.Link>  
                  <Nav.Link onClick={logout}>Sair</Nav.Link>                   
                </Nav>                
              </Offcanvas.Body>              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

 