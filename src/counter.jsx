import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }


    const reduceStyle = {
        border: '4px solid yellow',
        color:'white',
        backgroundColor: 'red',
        borderRadius: '20px',
        outline:'none',
        margin: '20px'
        
}
    const addStyle = {
        border: '4px solid #1A1B41',
        color:'#1A1B41',
        backgroundColor: '#BAFF29',
        borderRadius: '20px',
        outline:'none',
        margin: '20px'
        
}

    return (
        <div style={{border: '6px solid green', borderRadius: '20px', padding:'20px'}}>
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd} style={addStyle}>Add +</button>
            <button onClick={handleReduce} style={reduceStyle}>Reduce</button>
        </div>
    )
}