import './CampoNumero.css'

const CampoNumero = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-numero">
            <label>
                {props.label}
            </label>

            <input type="number"
                   value={props.valor} 
                   onChange={aoDigitado} 
                   required={props.obrigatorio} 
                   placeholder={placeholderModificada}
            />

        </div>
    )
}

export default CampoNumero