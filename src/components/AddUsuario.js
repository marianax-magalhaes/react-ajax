import React, { Component } from 'react'

import './AddUsuario.css'

const INITIAL_STATE = {
    usuario: { nome: '', sobrenome: '', email: '' }
  }

class AddUsuario extends Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_STATE

    this.onChangeHandler = this.onChangeHandler.bind(this)

    this.onSubmitHandler = this.onSubmitHandler.bind(this)

  }


  onChangeHandler(event) {
    const { name, value } = event.target

    this.setState({ usuario: { ...this.state.usuario, [name]: value } })
  }

 

  onSubmitHandler(event) {

    event.preventDefault()

    const usuario = this.state.usuario

    fetch('https://reqres.in/api/users', {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify(usuario)})
    .then(resposta => resposta.json())
    .then(dados=>{
        // console.log(dados)
        this.setState(INITIAL_STATE)
        this.props.addUsuario(dados)
    })

  }

  render() {

    return (

      <div className="AdicionarUsuario">

        <h2>Adicionar Usuário</h2>

        <form onSubmit={this.onSubmitHandler}>

          <div className="Linha">

            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={this.state.usuario.nome}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>

            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={this.state.usuario.sobrenome}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>

          </div>

          <div className="Linha">

            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.usuario.email}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>

          </div>

          <button type="submit">Adicionar</button>

        </form>

      </div>

    )
  }
}

export default AddUsuario