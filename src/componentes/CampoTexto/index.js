import { useState } from "react";
import "./CampoTexto.css"

export default function CampoTexto(props) {

    //let valor = '';
    const [valor, setValor] = useState('')

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )
}