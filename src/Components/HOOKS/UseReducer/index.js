import React, { useState, useReducer } from 'react'
import { reducer } from './reducer'

const booksData = [
    { id: 1, name: "Pather panchali" },
    { id: 2, name: "Padma nodir maji" },
    { id: 3, name: "Srikanto" },
];

const Modal = ({ modalText }) => {
    return <b> {modalText} </b>
}


const UseReducer = () => {

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ""
    })


    const [bookName, setBookName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch({ type: "ADD", payload: newBook });
        setBookName("");


    }

    const removeBook = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }



    return (

        <div>
            <h3>BookList</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='bookName' value={bookName} onChange={(e) => { setBookName(e.target.value) }} required />
                <button type='submit'>Add Book</button>
            </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

            {
                bookState.books.map((book) => {
                    const { id, name } = book;
                    return (
                        <li key={id}>
                            {name}  <button onClick={() => { removeBook(id) }}>Remove</button>
                        </li>
                    )
                })
            }
        </div>

    )
}

export default UseReducer