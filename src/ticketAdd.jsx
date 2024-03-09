import { useState } from "react";

export default function TicketAdd(){


    const [price, totalTicket] = useState(0);
    
    const addTicket = () => {
        const newTicket = price + 200;
        totalTicket(newTicket);
    }
    
    const removeTicket = () => {
        totalTicket(price - 500);
    }
    
    const basicStyle = {
        backgroundColor: '#F7ECE1',
        padding: '30px',
        margin: '20px',
        border: '8px solid #242038',
        borderRadius: '20px'
    }
    


    const greenStyle = {
        backgroundColor: '#058C42',
        color: 'white',
        border: '3px solid #04471C',
        borderRadius:'10px',
        outline: 'none',
        margin: '10px'
    }
    const redStyle = {
        backgroundColor: '#DD1155',
        color: 'white',
        border: '3px solid #880044',
        borderRadius:'10px',
        outline: 'none',
        margin: '10px'
    }

    return (
  
        <div style={basicStyle}>
            <h1>Ticket Price : {price} </h1>
        <button onClick={addTicket}  style={greenStyle}> Add Ticket</button>
        <button onClick={removeTicket} style={redStyle} > Remove Ticket</button>
        </div>



)






}