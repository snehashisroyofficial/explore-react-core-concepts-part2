import { useEffect, useState } from "react"

export default function People() {
    
const [user, setUser] = useState([])

    useEffect(() => {
    

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data => setUser(data))


},[])

    
    useEffect(()=>{},[])

    return (
        <div>
            <h3>
                No. of users {user.length}
            </h3>
        </div>
    )
}