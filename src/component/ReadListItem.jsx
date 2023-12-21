import '../css/ReadListItem.css'
import Box from '@mui/material/Box';
import { useState } from 'react'


export const ReadListItem = ({book, onStateChange}) => {
    
    console.info('book is',book)

    const [open, setOpen] = useState(false)
    const {book_id, title, author, state} = book;

    return(
        <div className="BookItem" onClick={()=> setOpen(!open)}>
            
            <p>{book_id}</p>
            <p>{title}</p>
            <p>{author}</p>
            <p>{state}</p>

            {open && 
            <>
                {state !== "START" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',     
                        border: 'black',      
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(book_id,"START")}
                    >   
                        MOVE TO START
                    </Box>
                }
                {state !== "PROGRESS" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',    
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(book_id,"PROGRESS")}
                    >   
                        MOVE TO PROGRESS
                    </Box>
                }
                {state !== "DONE" &&
                    <Box
                        sx={{
                        bgcolor: 'background.paper',
                        p: 2,
                        minWidth: 10,
                        maxWidth: 75
                        }}
                        onClick={() => onStateChange(book_id,"DONE")}
                    >   
                        MOVE TO DONE
                    </Box>
                }
            </>}
        </div>  
    )
}