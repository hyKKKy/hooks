import './login.css'
import { useState } from 'react'

export function Login(){
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handler(e){
        e.preventDefault()
        alert(`Login: ${login}\nPassword: ${password}`)
    }



    return(
        <form className='container'>
            <span>Login: </span>
            <input type='text' value={login} onChange={(e) => setLogin(e.target.value)}></input>
            <span>Password: </span>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='save-btn' onClick={handler}>Submit</button>
        </form>
    );

}   