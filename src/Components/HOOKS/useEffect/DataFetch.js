import React, { useEffect, useState } from 'react'
const loadingMessage = <p> Todo is Loading </p>

const DataFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
            });


    }, []);


    const todosElement = todos && todos.map((todo) => {
        return <p key={todo.id}>  {todo.title} </p>
    })



    return (
        <div>
            <h1>Todos</h1>
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    )
}

export default DataFetch