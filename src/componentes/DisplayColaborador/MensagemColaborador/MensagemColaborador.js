import './MensagemColaborador.css'
import ContainerHorizontal from '../../ContainerHorizontal';
import Botao from '../../Botao';

export const MensagemColaborador = (props) => {

    const {onEnviar, onFechar} = props;
    const {nome} = props;

    return (
       <div className='mensagem-colaborador'>

           <header>
           <h2> Mensagem para {nome} </h2>
           </header>

           <div>
               <textarea
                   placeholder='Sua mensagem aqui...'
               >
               </textarea>
           </div>

           <Botao tipo="neutro" onClick={ (evento) => onEnviar(evento) }>
               ✔️ Enviar
           </Botao>

           <Botao tipo="neutro" onClick={ (evento) => onFechar(evento) }>
               ❌ Cancelar
           </Botao>

       </div>
    )

}