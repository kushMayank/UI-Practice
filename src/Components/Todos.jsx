import {useState } from "react"

export const Todos = () => {
    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState("")

    const handleAddTodos = (e) => {
        e.preventDefault()
        if (!todoInput.trim()) return;
        const todoObj = {
            name: todoInput,
            isCompleted: false,
            id: crypto.randomUUID()
        }
        setTodos((prev) => [...prev, todoObj])
        setTodoInput("")
    }

    const handleComplete = (id) => {
        console.log("idd", id)
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        );
    }

    const handleDelete = (id) => {
        console.log("idd", id, todos)

        setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
    }

    const handleEdit = (id) => {

    }

    return (
        <>
            <form onSubmit={handleAddTodos}>
                {
                    todos.map((todo) => <TodosRow key={todo.id} todoItem={todo} handleComplete={handleComplete} handleDelete={handleDelete} />)
                }
                <input style={{ border: '1px solid blue' }} onChange={(e) => setTodoInput(e.target.value)} value={todoInput} name='todo' type="input" />
                <button type="submit">Add to Todo</button>
            </form>

        </>
    )
}
function TodosRow({ todoItem, handleComplete, handleDelete, handleEdit }) {
    const [isEditMode, setEditMode] = useState(false);



    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {
                !isEditMode ? <>  <input onClick={() => handleComplete(todoItem.id)} type="checkBox" checked={todoItem.isCompleted} />
                    {todoItem.name}
                    <button onClick={() => handleDelete(todoItem.id)}>❌</button>
                    <button onClick={() => setEditMode(true)}>✏️</button>
                </> : <>
                    <button >Save 💾</button>
                    <button onClick={() => setEditMode(false)}> Cancel Edit❌</button>
                </> 

            }
        </div>
    )
}