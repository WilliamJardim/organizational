import Colaborador from '../Colaborador';
import DisplayColaborador from '../DisplayColaborador';
import { useState } from 'react';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    const {times, setores} = props;
    const {colaboradores, setColaboradores} = props;
    const [visualizandocolaborador, setVisualizandocolaborador]  = useState(false);
    const [objetocolaborador,       setObjetoColaborador]        = useState(false);

    const onAbrirColaborador = function(evento, obj){
        setVisualizandocolaborador(true);
        setObjetoColaborador(obj);
    }

    const onFecharColaborador = function(evento, obj){
        setVisualizandocolaborador(false);
        setObjetoColaborador({});
    }

    return (
        (colaboradores.length > 0) ? 

            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

                {
                    //Se o display do colaborador estiver aberto
                    visualizandocolaborador ? <DisplayColaborador colaboradores={colaboradores}
                                                                  setColaboradores={setColaboradores}
                                                                  colaborador={objetocolaborador}
                                                                  onFecharColaborador={onFecharColaborador}
                                                                  times={times}
                                                                  setores={setores}
                                              /> : ''
                }

                <div className='colaboradores'>

                    {props.colaboradores.map( colaborador => <Colaborador id={colaborador.id}
                                                                          corDeFundo={props.corPrimaria} 
                                                                          key={colaborador.nome} 
                                                                          nome={colaborador.nome} 
                                                                          idade={colaborador.idade}
                                                                          descricao={colaborador.descricao}
                                                                          time={colaborador.time}
                                                                          setor={colaborador.setor}
                                                                          cargo={colaborador.cargo} 
                                                                          imagem={colaborador.imagem}                                                          
                                                                          /*Eventos*/
                                                                          onAbrirColaborador={onAbrirColaborador}                                               
                                                            /> 
                    )}

                </div>

            </section> 
        : ''
    )
}

export default Time