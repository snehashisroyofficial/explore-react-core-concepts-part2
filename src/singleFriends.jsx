export default function Friend({hello}){
    
    const { name, email, address } = hello;
    return (
        <div className="box">
            <h3>name:{name}</h3>
            <p>Email: {email}</p>
            <p>Email: {address.zipcode}</p>
        </div>
    )
}



// data fetch map use 