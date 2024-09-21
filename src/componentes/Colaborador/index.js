import './Colaborador.css'

const Colaborador = (props) => {
    const dados = props;

    const { id,
            nome, 
            idade, 
            descricao,
            imagem, 
            cargo, 
            setor,
            corDeFundo 
    } = dados;

    const onAbrirColaborador = function(evento){
        dados.onAbrirColaborador(evento, dados);
    }

    return (
    
        <div className='colaborador'
             onClick={onAbrirColaborador}
        >

            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h4>{idade} anos.</h4>
                <h5>{cargo}</h5>
            </div>

        </div>

    );
}

export default Colaborador