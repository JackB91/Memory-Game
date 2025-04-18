export default function Card({value, onClick}) {
    return (
        <div className="card" 
        onClick ={onClick}>{value? value:""}</div>
    )
}