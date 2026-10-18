
import { useState } from "react";

function App() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);

  function addBook() {
    if (book.trim() === "") return;

    setBooks([...books, { id: Date.now(), title: book }]);
    setBook("");
  }

  function removeBook(id) {
    setBooks(books.filter((item) => item.id !== id));
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Book Management App</h1>

      <input
        type="text"
        placeholder="Enter book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>

      <h2>My Books</h2>

      {books.map((item) => (
        <div key={item.id} style={{ margin: "10px" }}>
          {item.title}{" "}
          <button onClick={() => removeBook(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
