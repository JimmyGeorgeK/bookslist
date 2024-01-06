import React, {useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function EditBook() {

  let navigate = useNavigate(); 

  const {id}=useParams();

  const [book, setBook] = useState({
    book_name: "",
    author: ""
  });

  const { book_name, author } = book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBook();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/book/${id}`, book);
    navigate("/");
  };

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/${id}`);
    setBook(result.data);
  };



  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounde p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Book</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="book_name" className="form-label">
                Book Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter the Book Name"
              name="book_name"
              value={book_name}
              onChange={(e)=>onInputChange(e)}
              
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
              Author Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter the Author Name"
              name="author"
              value={author}
              onChange={(e)=>onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link  className="btn btn-outline-danger mx-2  " to="/">Cancel</Link>

            </form>
          </div>
        </div>


    </div>
  )
}
