
// data fetch map use 


import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './singleFriends'

export default function Friends() {
    

const [friends, setFriends]  = useState([])

    useEffect(() => {
    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data => setFriends(data))

       

},[])

    return (
        <div className='box'>
            <h3>Friends {friends.length}</h3>
            {
                friends.map(frnd => <Friend hello={frnd}></Friend>)
            }
        </div>
    )
}