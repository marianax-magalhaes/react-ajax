import React, { Component } from 'react'

import AddUsuario from './AddUsuario'
import Usuario from './Usuario'


class Usuarios extends Component {

  constructor(props) {
    super(props)

    this.state = {
      usuarios: []
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

//   melhor lugar p executar requisicao http
  componentDidMount() {
      fetch('https://reqres.in/api/users')
      .then(resposta =>resposta.json())
      .then(dados => {
        //   console.log(dados.data)

          const usuarios = dados.data.map(usuario=>({
                id: usuario.id,
                nome: usuario.first_name,
                sobrenome: usuario.last_name,
                email: usuario.email
              
          }))

        //   console.log(usuarios)
        // this.setState({usuarios: usuarios})
        // como tem o mesmo nome, podemos simplificar para:
        this.setState({usuarios})
      })
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