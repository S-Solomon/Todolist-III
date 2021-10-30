import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus()
    })

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSumbit = e => {
        e.preventDefault();

        props.onSubmit({
            id: nanoid(),
            text: input
        });

        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleSumbit}>
            <input
                type="text"
                placeholder="Add a task"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleInputChange}
                ref={focusRef}
            />
            <button className="todo-button">Add todo</button>
        </form>
    );
};

export default TodoForm;
