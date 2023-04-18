import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

// componente Pai

function App() {

  const times = [
     {
      nome: 'Programação',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'Front-End',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'Data Science',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'Devops',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'UX e Desing',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: ''
     },

     {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: ''
     }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
