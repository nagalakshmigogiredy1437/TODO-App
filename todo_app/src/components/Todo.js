import { useState } from "react"
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo(){
    const [todos, settodos] = useState([])
    const CompletedTodos = todos.filter((todo)=>todo.done).length
    const TotalLength =todos.length
   
    return <div>
        <Form todos ={todos} settodos={settodos}/>
       <TodoList todos={todos} settodos={settodos}/>
       <Footer CompletedTodos={CompletedTodos} TotalLength={TotalLength} />
    </div>
}