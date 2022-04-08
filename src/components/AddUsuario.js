import React, {useState} from 'react'

import './AddUsuario.css'

function AddUsuario(props) {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitHandler=event=>{
        event.preventDefault()

        const usuario = {nome, sobrenome, email}

        fetch('https://reqres.in/api/users', {
            method: 'POST', 
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(usuario)
        })
        .then(resposta => resposta.json())
        .then(dados=>{
        // console.log(dados)
            setNome('')
            setSobrenome('')
            setEmail('')

            props.addUsuario(dados)
    })
    }

    return (

      <div className="AdicionarUsuario">

        <h2>Adicionar Usuário</h2>

        <form onSubmit={onSubmitHandler}>

          <div className="Linha">

            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={event=> setNome(event.target.value)}
                required>
              </input>
            </div>

            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobrenome}
                onChange={event=>setSobrenome(event.target.value)}
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
                value={email}
                onChange={event=>setEmail(event.target.value)}
                required>
              </input>
            </div>

          </div>

          <button type="submit">Adicionar</button>

        </form>

      </div>

    )
}


export default AddUsuario