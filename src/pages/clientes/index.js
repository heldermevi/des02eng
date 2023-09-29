
import './index.css';
import Cliente from '../../models/Cliente';
import clienteService from "../../service/cliente-service"

import Swal from 'sweetalert2'
 
import { useEffect, useState } from 'react';
import { BsPersonAdd, BsTelephoneInbound, BsCalendar3 } from 'react-icons/bs';
import { AiOutlineMail,AiOutlineEdit } from 'react-icons/ai'; 
import { MdDelete } from 'react-icons/md';
function ClientePage() {
  const [clientes, setClientes] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [cliente, setCliente] = useState(new Cliente());
  useEffect(() => {
    clienteService.obter()
      .then(response => { setClientes(response.data); })
      .catch(erro => { console.log(erro); });
  }, []);

  const editar = (e) => {
    setModoEdicao(true);
    let clienteEncontrado = clientes.find(c => c.id == e.target.id);
    clienteEncontrado.dataCadastro = clienteEncontrado.dataCadastro.substring(0,10);
    setCliente(clienteEncontrado);
  }
  const excluir = (e) => {
    let clienteEncontrado = clientes.find(c => c.id == e.target.id);
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Deseja realmente excluir o cliente " + clienteEncontrado.nome)){
      excluirClienteBackEnd(clienteEncontrado.id);
    }
  }

  const adicionar = () => { setModoEdicao(false); };
  const atualizarClienteNaTabela = (clienteAtualizado, removerCliente = false) =>{
    let indice = clientes.findIndex((cliente) => cliente.id === clienteAtualizado.id);
    (removerCliente) 
        ? clientes.splice(indice, 1)
        : clientes.splice(indice, 1, cliente);
    setClientes(arr => [...arr]);
  }
  const salvar = () => {
    if (!cliente.nome || !cliente.email) {
      Swal.fire({
        icon: 'error',
        text: 'Nome e E-mail   são obrigatórios.',
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    (modoEdicao) ? atualizarClienteBackend(cliente) : adicionarClienteBackend(cliente);
  };
  const adicionarClienteBackend = (cliente) => {
    clienteService.adicionar(cliente)
      .then(response => {
        setClientes(lista => [...lista, new Cliente(response.data)]);
        limparCliente();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contato cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1000          
        });
      })
      .catch(erro => {
      })      
  }
  const atualizarClienteBackend = (cliente) => {
    clienteService.atualizar(cliente)
    .then(response => {
      atualizarClienteNaTabela(response.data);
      limparCliente();      

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contato atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1000
      });
    })
    .catch(erro => {
    })
  }
  const excluirClienteBackEnd = (id) => {
    clienteService.excluir(id)
    .then(() => {
      let clienteEncontrado = clientes.find(c => c.id == id);
      atualizarClienteNaTabela(clienteEncontrado, true);      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contato excluido com sucesso!',
        showConfirmButton: false,
        timer: 1000
      });
    })
    .catch();
  }

  const limparCliente = () => {
    setCliente({
      ...cliente,
      id: '',
      nome: '',      
      telefone: '',
      dataCadastro: '',
      email: ''
    });
  }

  return (
    <div className="container">       
            <div className="row mt-3">
        <div className="col-sm-12">
          <h4> Contatos</h4>
          <p>Formulário desenvolvido para você poder registrar de maneira 
              simples informações sobre sua rede de contatos, podendo criar enventos entre 
              outras tarefes.</p>
          <hr />
        </div>
      </div>
       
      <div className="row">
        <div className="col-sm-3">
          <button id="btn-adicionar" className="btn btn-primary btn-sm"
            data-bs-toggle="modal" data-bs-target="#modal-cliente"
            onClick={adicionar} >
           <BsPersonAdd/> Adicionar
          </button>
        </div>
      </div>
       
      <div className="row mt-3">
        <div className="col-sm-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th> <BsPersonAdd/> Nome</th> 
                <th> <AiOutlineMail/> E-mail</th>
                <th> <BsTelephoneInbound/> Telefone</th>
                <th> <BsCalendar3/> Nascimento</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr className='linha'>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>                   
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td>{new Date(cliente.dataCadastro).toLocaleDateString()}</td>
                  <td>
                    <button id={cliente.id} onClick={editar}
                      class="btn btn-outline-primary btn-sm mr-3"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-cliente">
                      <AiOutlineEdit/> editar
                    </button>
                    <button id={cliente.id} onClick={excluir} 
                      class="btn btn-outline-primary btn-sm espacar">
                      <MdDelete/> excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       
      <div className="row">   
        <div className="modal fade modal-lg" id="modal-cliente">
          <div className="modal-dialog">
            <div className="modal-content">               
              <div className="modal-header">
                <h4 className="modal-title">{modoEdicao ? "Editar Contato " : "Adicionar Contato"}</h4>
                <button type="button" className="btn-close"
                  data-bs-dismiss="modal" ></button>
              </div>
               
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-1">
                    <label for="id" className="form-label">Id</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="id"
                      value={cliente.id}                      
                      onChange={(e) => setCliente({ ...cliente, id: e.target.value })} />
                  </div>

                  <div className="col-sm-8">
                    <label for="nome" className="form-label"> <BsPersonAdd/> Nome</label>
                    <input type="text" className="form-control" id="nome"
                      value={cliente.nome}
                      onChange={(e) => setCliente({ ...cliente, nome: e.target.value })} />
                  </div>
                  <div className="col-sm-3">
                    <label for="dataCadastro" className="form-label"> <BsCalendar3/> Data Nascimento</label>
                    <input type="date" className="form-control" id="dataCadastro"  
                      value={cliente.dataCadastro}
                      onChange={(e) => setCliente({ ...cliente, dataCadastro: e.target.value })} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-5">
                    <label for="email" className="form-label"> <AiOutlineMail/> E-mail</label>
                    <input type="text" className="form-control" id="email"
                      value={cliente.email}
                      onChange={(e) => setCliente({ ...cliente, email: e.target.value })} />
                  </div>
                  <div className="col-sm-3">
                    <label for="telefone" className="form-label"> <BsTelephoneInbound/> Telefone</label>
                    <input type="text" className="form-control" id="telefone"
                      value={cliente.telefone}
                      onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })} />
                  </div>                                     
                </div>
              </div>
               
              <div className="modal-footer">
                <button id="btn-salvar" className="btn btn-primary btn-sm" onClick={salvar} >Salvar</button>
                <button id="btn-cancelar" className="btn btn-light btn-sm" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientePage;