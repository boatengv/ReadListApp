import { useState } from "react";
import { Link } from 'react-router-dom'

export const LoginForm = () => {

    const email = useState("");
    const password = useState("");

    const onSubmit = () => {

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Email</label>
                <input></input>
                <label>Password</label>
                <input></input>
            </div> 
            <Link to="Home"><button>Login</button></Link>
        </form>    
    )
}