import './DisplayColaborador.css'
import { useState } from 'react';
import ContainerHorizontal from '../ContainerHorizontal';
import Botao from '../Botao';
import EditorColaborador from './EditorColaborador';

const DisplayColaborador = (props) => {
    const [colaborador, setColaborador] = useState( props.colaborador );
    const idColaborador = colaborador.id || null;
    const {colaboradores, setColaboradores, times, setores} = props;
    const {onMensagem, onFecharColaborador} = props;

    const [editando,  setEditando] = useState(false);

    const onEditar = function(){
        setEditando(true);
    }

    const onPararEditar = function(){
        setEditando(false);
    }

    const onGravarColaborador = function( colaboradorEditado ){

        //Grava no objeto
        let novoColaboradores = [... colaboradores].map(function(col){
            if(col.id == idColaborador){
                return colaboradorEditado; //O colaborador editado
            }

            return col;
        });

        setColaborador( colaboradorEditado );
        setColaboradores( novoColaboradores );
        onPararEditar();
        
    }

    const onFecharDisplay = function(){
        onPararEditar();
        onFecharColaborador();
    }

    return (

        <div className='display-colaborador'>

            <div className='display-flex'>

                <div className='cabecalho-colaborador'>
                    <h1> { colaborador.nome } </h1>
                    <img src={colaborador.imagem} alt={colaborador.nome}/>

                    <ContainerHorizontal>

                        <Botao tipo="neutro" onClick={onMensagem}>
                            Mensagem
                        </Botao>

                        <Botao tipo="neutro" onClick={onMensagem}>
                            Ligação
                        </Botao>

                    </ContainerHorizontal>

                </div>

                <div className='texto-apresentacao'>
                    <h2> Sobre: </h2>
                    <textarea value={colaborador.descricao}></textarea>

                    <ContainerHorizontal>

                        <Botao tipo="cancelar" onClick={onFecharDisplay}>
                            Fechar Janela
                        </Botao>

                        {
                            editando == false ? 
                            <Botao tipo="neutro" onClick={onEditar}>
                                Editar
                            </Botao> : 
                            
                            <Botao tipo="neutro" onClick={onPararEditar}>
                                Cancelar
                            </Botao>
                        }

                    </ContainerHorizontal>
                </div>

                {
                    editando ? 

                        <EditorColaborador colaborador = {colaborador}
                                           onCancelar  = {onPararEditar}
                                           onGravarColaborador = {onGravarColaborador}
                                           times={times}
                                           setores={setores}
                        />

                    : ''
                }

            </div>

        </div>
             

    )
}

export default DisplayColaborador