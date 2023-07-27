import './Botao.css'

export default function Botao(props) {
    return (
        <div className='botaoDiv'>
            <button className='botao'>{props.children}</button>
        </div>
    )
}