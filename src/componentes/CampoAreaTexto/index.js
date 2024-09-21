import './CampoAreaTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-area-texto">
            <label>
                {props.label}
            </label>

            <textarea value={props.valor} 
                      onChange={aoDigitado} 
                      required={props.obrigatorio} 
                      placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto