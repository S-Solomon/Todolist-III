import { useState } from "react";
import { nanoid } from "nanoid";

const TodoForm = (props) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        // props.onSubmit({
        //     id: nanoid(),
        //     text: input
        // })
        setInput('')
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
            />
            <button className="todo-button">Add todo</button>
        </form>
    );
};

export default TodoForm;
