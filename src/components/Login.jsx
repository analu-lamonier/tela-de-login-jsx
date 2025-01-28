import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom";
import styles from "./Login.module.css" ;



export function Login ()  {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " - " + password);
        
    }

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className={styles.inputfield}>
                <input 
                    type="email" 
                    placeholder='E-mail'
                    onChange={(e) => setUsername(e.target.value)}
                
                />
                <FaUser className={styles.icon}/>
            </div>
            <div className= {styles.inputfield}>
                <input 
                    type="password" 
                    placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    
                <FaLock className={styles.icon}/>  
            </div>

            <div className={styles.recallforget}>
                <label htmlFor="">
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>

            <button>Entrar</button>

            <div className={styles.signuplink}>
                <p>
                    Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </div>
            
            

        </form>
    </div>
  )
}

