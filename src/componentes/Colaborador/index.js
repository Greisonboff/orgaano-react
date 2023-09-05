import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import './Colaborador.css'

export default function Colaborador(props) {
    function favoritar() {
        props.aoFavoritar(props.id)
    }

    const propFavorito = {
        size: 25 ,
        onClick: favoritar 
    }
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => props.aoDeletar(props.id)} />
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className="favoritar">
                    {props.favorito
                        ? <AiFillHeart {...propFavorito} color="#ff0000" />
                        : <AiOutlineHeart {...propFavorito} />}
                </div>
            </div>
        </div>
    )
}