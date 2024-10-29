import { useState } from "react";
import styles from '../components/form.module.css'

export default function Form({todos,settodos}){
    const [todo, settodo] = useState({name:"",done:false})
    function handleSubmit(e){
        e.preventDefault();
        settodos([...todos,todo])
        settodo({name:"",done:false})
    }
    return <div>
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
                <input className={styles.modernInput} onChange={(e)=>settodo({name:e.target.value})} value={todo.name} type='text' placeholder="Enter Todo Item..."></input>
                <button className={styles.moderbutton} type="submit">ADD</button>
            </div>
        </form>
    </div>

}