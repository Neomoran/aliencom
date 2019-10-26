import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';


export default function SignIn () {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
       <div className = 'joinOuterContainer'>
           <div className = 'joinInnerContainer'>
               <h1 className = 'heading'>Aliencom</h1>
                <div><input className = 'joinInput' placeholder = 'username' type ='text' onChange = {(event) => setName(event.target.value)} /></div>
                <div><input className = 'joinInput mt-20' placeholder = 'Room' type ='text' onChange = {(event) => setRoom(event.target.value)} /></div>
                <Link onClick = {e => (!name || !room) ? e.preventDefault() : null} to = {`/Chat?name=${name}&room=${room}`}>
                    <button type = 'submit' className = 'button mt-20'>Sign In</button>
                </Link>
           </div>
           

       </div>
    );
}