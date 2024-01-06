import React, {useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom";

import axios from 'axios';

export default function Home() {

    const [books, setBooks] = useState([]);
    const{id}=useParams();

    useEffect(() => {
        loadBooks();
      }, []);

      const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/books");
        setBooks(result.data);
      };

      const deleteBook = async (id) => {
        await axios.delete(`http://localhost:8080/book/${id}`);
        loadBooks();
      };

  return (
    <div className='container'>
        <div className='py-4>'> </div>
        
        <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>

    {books.map((book, index) =>(

     <tr>
     <th scope="row" key={index}>
                  {index + 1}</th>
     <td>{book.book_name}</td>
     <td>{book.author}</td>

                 <Link
                    className="btn btn-primary mx-2"
                    to={`/viewbook/${book.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editbook/${book.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
     </tr>
    ))
}
    
  </tbody>
</table>


    </div>
  )
}
