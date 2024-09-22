import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Botao from './componentes/Botao';
import BarraEdicao from './componentes/BarraEdicao';
import AlertaConfirmacao from './componentes/AlertaConfirmacao';

function App() {

  const times = [
    {
      nome: 'Programadores',
      corPrimaria: '#07A2F8',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Designers',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Cientistas',
      corPrimaria: '#06DFFF',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Estrategistas',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Apresentadores',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Motoristas',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const setores = [
    {
      nome: 'Suporte'
    },
    {
      nome: 'Investigação'
    },
    {
      nome: 'Invenção'
    },
    {
      nome: 'Pesquisa'
    },
    {
      nome: 'Consultoria'
    },
    {
      nome: 'Comentarista'
    }
  ]

  const [colaboradores,           setColaboradores]            = useState([
    {
      id: new Date().getTime(),
      nome: 'William',
      descricao: 'Um programador',
      cargo: 'Programador',
      time: 'Programadores',
      imagem: 'https://github.com/WilliamJardim.png',
      idade: 20
    }
  ]);

  const [cadatrando,              setCadastrando]              = useState(false);
  const [confirmandoApagar,       setConfirmandoApagar]        = useState(false);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setCadastrando(false);
  }

  const onNovoClick = function(evento){
    setCadastrando(true);
  }

  const onCancelarEdicao = function(){
    setCadastrando(false);
  }

  const onApagarTodosColaboradores = function(){
    setColaboradores([]);
  }

  const onConfirmarDeletarTudo = function(){
    onApagarTodosColaboradores();
    setConfirmandoApagar(false);
    onCancelarEdicao();
  }

  const onRecusarDeletarTudo = function(){
    setConfirmandoApagar(false);
    onCancelarEdicao();
  }

  const abrirConfirmacaoDeletarTudo = function(){
    setConfirmandoApagar(true);
    onCancelarEdicao();
  }

  return (
    <div className="App">
      <Banner />

      <BarraEdicao>
          <Botao tipo="neutro" onClick={onNovoClick}>
             ✏️ Novo Colaborador
          </Botao>

          <Botao tipo="perigo" onClick={abrirConfirmacaoDeletarTudo}>
             🗑️ Apagar Tudo
          </Botao>
      </BarraEdicao>

      {
        confirmandoApagar && <AlertaConfirmacao onConfirmar={onConfirmarDeletarTudo}
                                                onRecusar={onRecusarDeletarTudo}
                             />        
      }

      {
        //Se estiver cadastrando um novo
        cadatrando && <Formulario nomeForm='Cadastro'
                                  times={times.map(time => time.nome)} 
                                  setores={setores.map(setor => setor.nome)} 
                                  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
                                  onCancelar={onCancelarEdicao}
                      />
      }

      {times.map(time => <Time 
        times={times}
        setores={setores}
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        setColaboradores={setColaboradores}
      />)}   

    </div>
  );
}

export default App;
