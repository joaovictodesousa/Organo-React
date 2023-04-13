import './ListaSuspensa.css'   //importar o css

const ListaSuspensa = (props) => {  // são uma forma de passar dados de um componente pai para um componente filho no React.
    // A função "ListaSupensa" deve retornar um elemento React que será renderizado na tela.
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa