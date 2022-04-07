import React, {Component} from 'react'

class MeuComponente extends Component{

    constructor(props){
        super(props);

        this.state = {numero: 5}
        this.adicionarNumero = this.adicionarNumero.bind(this)

        console.log('constructor...')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps...')
        // console.log(props)
        // console.log(state)
        return null
    }

    componentDidMount() {
        console.log('componentDidMount...')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log('estado atual', this.state)
        console.log('proximo estado', nextState)
        return true
    }

    componentDiUpdate(){
        console.log('componentDiUpdate')
    }

    adicionarNumero(){
        console.log('setState')
        let numeroAtual = this.state.numero
        numeroAtual = numeroAtual + 1
        this.setState({numero: numeroAtual})
    }

    render(){
        console.log('render...')
        return<div>
            <p>{this.props.titulo}</p>
            <p>{this.state.numero}</p>
            <button onClick={this.adicionarNumero}>Adicionar número</button>
        </div>
    }
}

export default MeuComponente