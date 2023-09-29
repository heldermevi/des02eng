import './index.css';
import Navbar from 'react-bootstrap/Navbar'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

function BasicExample() {
  return (
    <div class='card1' >
    <Card id='c1' >       
      <Card.Body>
        <Card.Title>Eventos</Card.Title>         
        <Card.Text>
          Ver cadastros e mais info.
        </Card.Text>
        <Button variant="primary">
        <Navbar.Brand href= '/eventos'>Acessar</Navbar.Brand>
          </Button>
      </Card.Body>
    </Card>     
    <Card id='c2' >       
      <Card.Body>
        <Card.Title>Cadastrar</Card.Title>         
        <Card.Text>
          Fazer cadastro ou alteração.
        </Card.Text>
        <Button variant="primary">
        <Navbar.Brand href= '/clientes'>Acessar</Navbar.Brand>
          </Button>
      </Card.Body>
    </Card>
    <Card id='c3' >       
      <Card.Body>
        <Card.Title>Usuário</Card.Title>         
        <Card.Text>
          Ver informações do usuário.
        </Card.Text>
        <Button variant="primary">
        <Navbar.Brand href= '../usuarios'>Acessar</Navbar.Brand>
          </Button>
      </Card.Body>
    </Card>
    </div>    
  );
}

export default BasicExample;