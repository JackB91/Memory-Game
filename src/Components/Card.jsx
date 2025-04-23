export default function Card({value, onClick,isMatched}) {
    return (
        <div className={`card${isMatched ? ' matched' : ''}`}
        onClick ={onClick}>{value? value:""}</div>
    )
}