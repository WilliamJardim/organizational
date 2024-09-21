import './Botao.css'

const Botao = (props) => {

    const classes = `botao botao-${props.tipo}`;

    return (
        <button className={classes}
                onClick={props.onClick}
        >
            {props.children}
        </button>)

}

export default Botao