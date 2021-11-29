
function Book({title, genre, _id}){
    
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Genre: {props.genre}</p>
        </div>
    )
}

export default Book;