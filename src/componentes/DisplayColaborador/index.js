import './DisplayColaborador.css'
import { useState } from 'react';
import ContainerHorizontal from '../ContainerHorizontal';
import Botao from '../Botao';
import EditorColaborador from './EditorColaborador';
import AlertaConfirmacao from '../AlertaConfirmacao';
import MensagemColaborador from './MensagemColaborador';

const DisplayColaborador = (props) => {
    const [colaborador, setColaborador] = useState( props.colaborador );
    const idColaborador = colaborador.id || null;
    const {colaboradores, setColaboradores, times, setores} = props;
    const {onMensagem, onFecharColaborador} = props;

    const [editando,           setEditando]          = useState(false);
    const [confirmandoApagar,  setConfirmandoApagar] = useState(false);
    const [escrevendoEmail,    setEscrevendoEmail]   = useState(false);

    const onConfirmarDeletarTudo = function(){
        setConfirmandoApagar(false);
    }

    const onRecusarDeletarTudo = function(){
        setConfirmandoApagar(false);
    }

    const abrirConfirmacaoDeletarTudo = function(){
        setConfirmandoApagar(true);
    }

    const abrirTelaMensagem = function(){
        setEscrevendoEmail(true);
    }

    const fecharTelaMensagem = function(){
        setEscrevendoEmail(false);
    }

    const onMensagemClick = function(){
        fecharTelaMensagem();
    }

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

                {
                    escrevendoEmail && <MensagemColaborador nome={colaborador.nome}
                                                            onEnviar={onMensagemClick}
                                                            onFechar={fecharTelaMensagem}/>
                }

                {
                    (!escrevendoEmail &&
                     !confirmandoApagar) &&
                    <div className='cabecalho-colaborador'>
                        <h1> { colaborador.nome } </h1>
                        <img src={colaborador.imagem} alt={colaborador.nome}/>

                        <ContainerHorizontal>

                            <Botao tipo="neutro" onClick={abrirTelaMensagem}>
                               💬 Mensagem
                            </Botao>

                            <Botao tipo="neutro" onClick={onMensagem}>
                               📞 Ligação
                            </Botao>

                        </ContainerHorizontal>

                    </div>
                }

                {
                    (!escrevendoEmail &&
                      !confirmandoApagar)
                    &&
                    <div className='texto-apresentacao'>
                        <h2> Sobre: </h2>
                        <textarea value={colaborador.descricao}></textarea>

                        <ContainerHorizontal>

                            <Botao tipo="cancelar" onClick={onFecharDisplay}>
                                ❌ Fechar
                            </Botao>

                            <Botao tipo="perigo" onClick={abrirConfirmacaoDeletarTudo}>
                                🗑️ Apagar
                            </Botao>

                            {
                                editando == false ? 
                                <Botao tipo="neutro" onClick={onEditar}>
                                    ✏️ Editar
                                </Botao> : 
                                
                                <Botao tipo="neutro" onClick={onPararEditar}>
                                    ❌ Cancelar
                                </Botao>
                            }

                        </ContainerHorizontal>
                    </div>
                }

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

                {
                    confirmandoApagar && <AlertaConfirmacao onConfirmar={onConfirmarDeletarTudo}
                                                            onRecusar={onRecusarDeletarTudo}
                                        />        
                }

            </div>


        </div>
             

    )
}

export default DisplayColaborador