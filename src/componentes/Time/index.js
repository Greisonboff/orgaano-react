import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

export default function Time(props) {
    return (
        props.colaboradores.length > 0 && <section className="time" style={{ backgroundImage: 'url(./imagens/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input value={props.cor} type="color" className="input-cor" onChange={evento => props.mudarCor(evento.target.value, props.id)} />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return (
                        <Colaborador
                         corDeFundo={props.cor} 
                         key={colaborador.nome} 
                         nome={colaborador.nome} 
                         id={colaborador.id} 
                         cargo={colaborador.cargo} 
                         imagem={colaborador.imagem} 
                         aoDeletar={props.aoDeletar} 
                         aoFavoritar={props.aoFavoritar}
                         favorito={colaborador.favorito}
                        />)
                })}
            </div>
        </section>
    )
}