import './App.css';
import { useState, useEffect } from "react";
import axios from "axios"

import Book from './components/Book'

// axios.get("/books") 
// we won't need to put the url but instead the /books because the /books will appended to the end of the proxy

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }, [])

  const booksList = books.map(book => <Book {...books} key={book.title}/>)

  return (
    <div className="App">
      {booksList}
    </div>
  );
}

export default App;
