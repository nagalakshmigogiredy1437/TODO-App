import styles from '../components/todoitem.module.css'
export default function TodoItems({item,todos,settodos}){

    function handleDelete(item){
        settodos(todos.filter(tod=>tod !== item))
    }

    function handleClick(name){
        const array=todos.map((todo)=>todo.name === name ? {...todo, done: !todo.done} : todo)
        settodos(array)
    }

    const className = item.done ? styles.completed :""

    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={className} onClick={()=>handleClick(item.name)}>
            {item.name}
            </span>
         <span>
            <button onClick={()=>handleDelete(item)} className={styles.delete}>X</button>
        </span>
        </div>
        
        <hr className={styles.line}/>
    </div>
}