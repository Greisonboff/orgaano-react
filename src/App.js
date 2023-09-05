import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      console.log(id)
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    console.log('teste')
    console.log(id)
    console.log(colaboradores)
  }

  function cadastraTime(novoTime) {
    var timeValido = times.filter(time => time.nome === novoTime.nome)
    if (timeValido.length === 0) {
      setTimes([...times, { ...novoTime, id: uuidv4() }])
      novoTime.activeMsg('valid','Time cadastrado com sucesso')
    }else{
      novoTime.activeMsg('erro','Time já cadastrado')
    }
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map( colaborador => {
      if (colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario
          cadastraTime={cadastraTime}
          times={times.map(times => times.nome)}
          timeCompleto={times}
          aoColaboradorCadestrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
        {times.map(times =>
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorTime}
            key={times.nome}
            nome={times.nome}
            id={times.id}
            cor={times.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
            aoDeletar={deletarColaborador}
          />)}
      </header>
      <Footer />
    </div>
  );
}

export default App;
