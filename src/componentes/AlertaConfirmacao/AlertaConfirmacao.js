import './AlertaConfirmacao.css'
import ContainerHorizontal from '../ContainerHorizontal';
import Botao from '../Botao';

export const AlertaConfirmacao = (props) => {

    const { onConfirmar, onRecusar } = props; 

    return (
       <div className='alerta-confirmacao'>

           <div>
               <header>
               <h2> ⚠️ Você tem certeza? </h2>
               </header>
               <Botao tipo="perigo" onClick={ (evento) => onConfirmar(evento) }>
                   ✔️ Sim
               </Botao>

               <Botao tipo="neutro" onClick={ (evento) => onRecusar(evento) }>
                   ❌ Não
               </Botao>

           </div>

       </div>
    )

}