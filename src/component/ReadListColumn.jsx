import '../css/ReadListColumn.css'
import { ReadListItem } from './ReadListItem'

export const ReadListColumn = ({state, data, onStateChange}) => {   

    return(   
        <div>
            <h1 className="state">{state} <button className="AddButton">+</button></h1>
            {data.map((book) => (
                <ReadListItem 
                    key={book.book_id} 
                    book={book}
                    onStateChange={onStateChange}
                />       
            ))}  
        </div>
    )
}