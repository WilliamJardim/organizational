import './BarraEdicao.css'

const BarraEdicao = (props) => {
    return (
        <div className='barra-edicao'>
            {props.children}
        </div>
    )
}

export default BarraEdicao