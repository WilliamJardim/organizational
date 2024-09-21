import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const keyPrefix = props.prefix;

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    if( typeof item == 'object' ){
                        return <option key={keyPrefix + item.nome}>{item.nome}</option>
                    }
                    return <option key={keyPrefix + item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa