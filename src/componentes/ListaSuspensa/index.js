import "./ListaSuspensa.css"

export default function ListaSuspensa(props) {
    function onEventClick(evento){
        props.aoAlterado(evento.target.value);
        props.aoAlteradoTimeId(evento.target.selectedOptions[0].id);
        props.aoAlteradoId();
    }
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => onEventClick(evento)} required={props.required} value={props.valor}>
                <option value={''}>Selecione</option>
                {props.timeCompleto.map(item => <option id={item.id} key={item.id}>{item.nome}</option>)}
            </select>
        </div>
    )
}