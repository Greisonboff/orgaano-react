
import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

export default function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadestrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formaulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label={'Nome'} placeholder={'Digite seu nome'} />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label={'Cargo'} placeholder={'Digite seu cargo'} />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label={'Link de Imagem'} placeholder={'Digite o endereço da imagem'} />
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} required={true} label={'Time'} item={props.times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}