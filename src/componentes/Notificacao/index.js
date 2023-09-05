import "./Notificacao.css"

export default function NotificacaoText(props) {    
    return (
        <div className={`notification${props.boxClas}`}>
            <p className={props.clas}>{props.text}</p>
        </div>
    );
}
