import './ContainerHorizontal.css'

const ContainerHorizontal = (props) => {
    return (
        <div className='container-horizontal'>
            {props.children}
        </div>
    )
}

export default ContainerHorizontal