import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
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
            {props.edit ? (
                <>
                    <input
                        placeholder="Update your item"
                        value={input}
                        onChange={handleInputChange}
                        name="text"
                        ref={focusRef}
                        className="todo-input edit"
                    />
                    <button onClick={handleSumbit} className="todo-button edit">
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add a todo"
                        value={input}
                        onChange={handleInputChange}
                        name="text"
                        className="todo-input"
                        ref={focusRef}
                    />
                    <button onClick={handleSumbit} className="todo-button">
                        Add todo
                    </button>
                </>
            )}
        </form>
    );
};

export default TodoForm;
