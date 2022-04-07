import React, { Component } from 'react'

import AddUsuario from './AddUsuario'
import Usuario from './Usuario'


class Usuarios extends Component {

  constructor(props) {
    super(props)

    this.state = {
      usuarios: [
        { id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com' },
        { id: 2, nome: 'Maria', sobrenome: 'Santos', email: 'maria@mail.com' }
      ]
    }

    this.addUsuario = this.addUsuario.bind(this)

  }

 
  addUsuario(usuario) {

    const usuarios = [...this.state.usuarios, usuario]

    this.setState({ usuarios: usuarios })

  }

  removerUsuario(usuario) {

    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      let usuarios = this.state.usuarios
      usuarios = usuarios.filter(x => x.id !== usuario.id)

      this.setState({ usuarios: usuarios })
    }

  }

  render() {

    return (
      <>

        <AddUsuario addUsuario={this.addUsuario} />

        {this.state.usuarios.map(usuario => (
            <Usuario key={usuario.id}
                    usuario={usuario}
                    removerUsuario={this.removerUsuario.bind(this, usuario)}
            />
        ))}

      </>

    )

  }

}

 

export default Usuarios