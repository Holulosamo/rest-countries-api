export default function Option({value, label, setFilter}){
    const handleClick = () => {
        setFilter(value)
    }

    return <li onClick={handleClick}>{label}</li>
}