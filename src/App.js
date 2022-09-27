import './App.css';
import {Component} from "react";
import { Busca } from './Busca';
import { Lista } from './Lista';
import { Cabecalho } from './Cabecalho';
import { Rodape } from './Rodape';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

render(){
  const {busca, odas} = this.state;
  return (
  
    <body className='container'>
      
      <Cabecalho/>

      <Busca
        busca={this.state.busca}
        buscaODA={this.buscaODA}
        />

      <Lista
        odas={this.state.odas}
      />

      <Rodape/>
</body>    
  );
}
}
export default App;
