import { useState } from "react";
import "./Campo.css"

export default function Campo(props) {
    var typeInput = props.type;
    if(!typeInput){
        typeInput = 'text';
    }
    const [valor, setValor] = useState('')

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return (
        <div className={`campo campo-${typeInput}`}>
            <label>{props.label}</label>
            <input title={props.placeholder} type={typeInput} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )
}