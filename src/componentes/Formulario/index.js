
import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { v4 as uuidv4 } from 'uuid';
import NotificacaoText from "../Notificacao"

export default function Formulario(props) {
    const [notificacaoText, setnotificacaoText] = useState('');
    const [notificacaoClass, setnotificacaoClass] = useState('');

    const [colaboradorNotificacaoText, setcolaboradorNotificacaoText] = useState('');
    const [colaboradorNotificacaoClass, setcolaboradorNotificacaoClass] = useState('');

    const setMsg = (err, msg) => {
        // Mostra o texto recebido por props
        setnotificacaoText(msg);
        setnotificacaoClass(`active_${err}`)

        // Define um temporizador para apagar o texto após 3 segundos
        setTimeout(() => {
            setnotificacaoText('');
            setnotificacaoClass('')
        }, 5000);
    }

    const setMsgColaborador = (err, msg) => {
        console.log(msg)
        // Mostra o texto recebido por props
        setcolaboradorNotificacaoText(msg);
        setcolaboradorNotificacaoClass(`active_${err}`)

        // Define um temporizador para apagar o texto após 3 segundos
        setTimeout(() => {
            setcolaboradorNotificacaoText('');
            setcolaboradorNotificacaoClass('')
        }, 5000);
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [idTime, setIdTime] = useState('')
    const [id, setId] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const favorito = false;

    const aoSalvar = (event) => {
        console.log(props)
        event.preventDefault()
        props.aoColaboradorCadestrado({ nome, id, cargo, imagem, time, idTime, favorito })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setId('')
        setIdTime('')
        setMsgColaborador('valid','Colaborador cadastrado com sucesso')
    }


    return (
        <section className="formaulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label={'Nome'} placeholder={'Digite seu nome'} />
                <Campo valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label={'Cargo'} placeholder={'Digite seu cargo'} />
                <Campo valor={imagem} aoAlterado={valor => setImagem(valor)} label={'Link de Imagem'} placeholder={'Digite o endereço da imagem'} />
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} aoAlteradoTimeId={id => setIdTime(id)} aoAlteradoId={() => setId(uuidv4())} required={true} label={'Time'} item={props.times} timeCompleto={props.timeCompleto} />
                <NotificacaoText boxClas={'Colaborador'} clas={colaboradorNotificacaoClass} text={colaboradorNotificacaoText} />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastraTime({ nome: nomeTime, cor: corTime, activeMsg: setMsg })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio label={'Nome'} placeholder={'Digite seu nome do time'} />
                <Campo type='color' valor={corTime} aoAlterado={valor => setCorTime(valor)} obrigatorio label={'Cor'} placeholder={'Digite a cor do time '} />
                <NotificacaoText boxClas={''}clas={notificacaoClass} text={notificacaoText} />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}