import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import CampoNumero from '../CampoNumero';
import CampoAreaTexto from '../CampoAreaTexto';
import ListaSuspensa from '../ListaSuspensa';
import ContainerHorizontal from '../ContainerHorizontal';
import './Formulario.css';

const Formulario = (props) => {

    const nomeForm                  = props.nomeForm || '';
    const titulo                    = props.titulo || 'Preencha os dados para criar o card do colaborador';
    const [nome,      setNome]      = useState(props.nome || '');
    const [idade,     setIdade]     = useState(props.idade || 18);
    const [cargo,     setCargo]     = useState(props.cargo || '');
    const [imagem,    setImagem]    = useState(props.imagem || '');
    const [time,      setTime]      = useState(props.time || '');
    const [setor,     setSetor]     = useState(props.setor || '');
    const [descricao, setDescricao] = useState(props.descricao || '');

    const limparForm = () => {
        setNome('');
        setIdade('');
        setCargo('');
        setImagem('');
        setTime('');
        setSetor('');
        setDescricao('');
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()

        let id = new Date().getTime();

        props.aoColaboradorCadastrado({
            id,
            nome,
            idade,
            cargo,
            imagem,
            time,
            setor,
            descricao
        })
        limparForm();
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>{titulo}</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoNumero
                    obrigatorio={false}
                    label="Idade"
                    placeholder="Digite sua idade" 
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                        prefix={nomeForm}
                        obrigatorio={true}
                        label="Time" 
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                />

                <ListaSuspensa
                    prefix={nomeForm}
                    obrigatorio={true}
                    label="Setor" 
                    itens={props.setores}
                    valor={setor}
                    aoAlterado={valor => setSetor(valor)}
                />
                <CampoAreaTexto 
                    obrigatorio={false}
                    label="Descrição"
                    placeholder="Apresente" 
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />

                <ContainerHorizontal>
                    
                    <Botao tipo='gravar'>
                        Salvar
                    </Botao>

                    <Botao tipo="cancelar" onClick={props.onCancelar}>
                        Cancelar
                    </Botao>

                </ContainerHorizontal>
                
            </form>
        </section>
    )
}

export default Formulario