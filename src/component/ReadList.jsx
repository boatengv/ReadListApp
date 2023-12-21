import '../css/ReadList.css'
import { ReadListColumn } from "./ReadListColumn"
import { useState } from 'react'
import booksData from '../SmallBookList.json'

export const ReadList = () => {

    const [books, setBooks] = useState(booksData)

    const changeBookState = (bookId, newState) => {
        setBooks(currentBooks =>
            currentBooks.map(book =>
                book.book_id === bookId ? { ...book, state: newState } : book
            )
        );
    };

    return (        
        <div className="grid-container">
            <div className="item1" id="start">
                <ReadListColumn 
                    state={"START"} 
                    data={books.filter(books => books.state === "START")}
                    onStateChange={changeBookState}
                />
            </div>
            <div className="item2" id="progress"> 
                <ReadListColumn state={"PROGRESS"} 
                data={books.filter(books => books.state === "PROGRESS")}
                onStateChange={changeBookState}
            />
            </div>
            <div className="item3" id="done">
                <ReadListColumn state={"DONE"} 
                data={books.filter(books => books.state === "DONE")}
                onStateChange={changeBookState}
            />
            </div>
        </div>
    )
}