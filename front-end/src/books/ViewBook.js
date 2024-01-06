import { Link, useParams } from 'react-router-dom'
import React, { useEffect,useState } from "react";
import axios from 'axios';

export default function ViewBook() {

    const [book, setBook] = useState({
        book_name: "",
        author: ""
      });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadBook();
      }, []);
    
      const loadBook = async () => {
        const result = await axios.get(`http://localhost:8080/book/${id}`);
        setBook(result.data);
      };
  return (

    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounde p-4 mt-2 shadow">
            <h2 className="text-center m-4">List of Book</h2>

            <div className="card">
                <div className="card-header">

                Details of user id :{book.id}  
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Book Name:</b>
                            {book.book_name}
                        </li>
                        <li className="list-group-item">
                            <b>Author Name:</b>
                            {book.author}
                        </li>

                    </ul>
                
                </div>
            
            </div>
            <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
          </div>
        </div>
    </div>
    
  )
}
