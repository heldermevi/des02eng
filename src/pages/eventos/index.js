import Alert from 'react-bootstrap/Alert';

import { FaBirthdayCake,FaUmbrellaBeach,  } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { LuConstruction } from 'react-icons/lu';
import './index.css';

function eventos() {
  return (
    <> 
    <h1 > Em contrução  <LuConstruction/> </h1>     
    <h1 > Enventos! </h1> 
    <div className="alert alert-primary" role="alert" >
    <FaBirthdayCake className='ico'/> Aniversário! Maria  - 15 de março.  <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-secondary" role="alert">
    <FaBirthdayCake className='ico'/> Aniversário! João - 8 de julho.   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-success" role="alert">
    <FaBirthdayCake className='ico'/> Aniversário! João Maria - 21 de outubro.   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-danger" role="alert">
    <MdGroups2 className='ico'/>  Reunião contato  01 - 10 de setembro de 2023.   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-warning" role="alert">
    <MdGroups2 className='ico'/> Reunião! 5 de junho de 2024.   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-info" role="alert">
      <MdGroups2 className='ico'/> Reunião! 18 de dezembro de 2023.   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-light" role="alert">
    <FaUmbrellaBeach className='ico'/>  Feriado! 25 de dezembro (Natal).   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>
    <div className="alert alert-dark" role="alert">
    <FaUmbrellaBeach className='ico'/> Feriado! 1º de maio (Dia do Trabalhor).   <Alert.Link href="/clientes">Ver Contato</Alert.Link>
    </div>  
    </>
  );
}

export default eventos;