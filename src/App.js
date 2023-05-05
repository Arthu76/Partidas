import Header from './components/Header';
import Option from './components/Option';

import { useState } from 'react';
import axios from 'axios';

function App() {
  const [anoSelecionado, setAnoSelecionado] = useState('');
  const [dadosCampeonato, setDadosCampeonato] = useState([]);

  function alterarAno(event) {
    const ano = event.target.value;
    setAnoSelecionado(ano);

    axios.get(`./allYears/${ano}/${ano}.json`).then(response => {
      let data = response.data;
      console.log(data);
      let numero = data.map(element => {
        return element.numero;
      });
      let partidas = data.map(element => {
        return element.partidas;
      });
      // console.log(partidas);
      let test = partidas.map(element => {
        // console.log(element);
        return element.visitante;
      });
      console.log(test);
      let visitantes = test.map(element => {
        return element.visitante;
      });
      // console.log(visitantes);
      setDadosCampeonato(`${numero}: ${visitantes}`);
    });
  }

  return (
    <div>
      <Header>React campeonato Brasileiro</Header>
      <select name="" id="" onChange={alterarAno}>
        <Option>2003</Option>
        <Option>2004</Option>
        <Option>2005</Option>
        <Option>2006</Option>
      </select>
      <p>{dadosCampeonato}</p>
    </div>
  );
}

export default App;
