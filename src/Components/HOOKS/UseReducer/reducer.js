export const reducer = (state, action) => {
    if (action.type === "ADD") {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book added"
        }
    }

    if (action.type === "REMOVE") {

        const filterBooks = [...state.books].filter(book => book.id !== action.payload);
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: "Book is removed",
        }


    }

}