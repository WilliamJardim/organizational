import './EditorColaborador.css'
import Formulario from '../../Formulario';

const EditorColaborador = (props) => {
    const colaborador = props.colaborador;
    const {times, setores} = props;
    const {onGravarColaborador, onCancelar} = props;

    return (
    
        <div className='editor-colaborador'>
            
            <Formulario nomeForm='Editor'
                        titulo='Editar Colaborador'
                        times={times} 
                        setores={setores} 
                        aoColaboradorCadastrado={onGravarColaborador}
                        onCancelar={onCancelar}

                        //Dados repassados
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        idade={colaborador.idade}
                        descricao={colaborador.descricao}
                        cargo={colaborador.cargo}
                        time={colaborador.time}
                        setor={colaborador.setor}
            />

        </div>

    );
}

export default EditorColaborador