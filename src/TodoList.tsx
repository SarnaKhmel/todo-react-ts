import { useState } from "react"

interface item {
    id: number,
    text: string,
    completed: boolean
}
export const TodoList: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: "Item 1", completed: false },
        { id: 2, text: "Item 2", completed: false },
        { id: 3, text: "Item 3", completed: false },
    ])
    const [input, setInput] = useState<string>("")

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )

    }

    const handleClick = () => {
        if (input !== "") {
            setTodos([...todos, {
                id: Math.random(),
                text: input,
                completed: false
            }])
            setInput("")
        }

    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))

    }



    return (
        <div className="main-container">
            <h1>Todo List</h1>
            <ul>
                {todos.map(item => (
                    <div key={item.id} className="line">
                        <li onClick={() => handleToggle(item.id)} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                            {item.text}
                        </li>
                        {item.completed ? <span>&#9733;</span> : <span>&#9734;</span>}
                        <span onClick={() => handleDelete(item.id)}>&#9746;</span>

                    </div>


                ))}
            </ul>
            <input type="text" placeholder="Add a new item" onChange={(e) => setInput(e.currentTarget.value)} />
            <button onClick={handleClick}>Add Item</button>
        </div>
    )
}

