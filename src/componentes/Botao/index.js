import './Botao.css'

const Botao = (props) => {

    const classes = `botao botao-${props.tipo}`;

    return (
        <button className={classes}
                onClick={props.onClick}
        >
            <text className='texto'>
                {props.children}
            </text>
        </button>)

}

export default Botao