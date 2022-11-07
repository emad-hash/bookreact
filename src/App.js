import Card from "./Card";
import Nav from "./Nav";
import Book from "./eBooks.js"
import Search from "./Search";
import { useEffect, useState } from "react";

function App() {
  const [book, setBook] = useState(Book.eBooks)
  useEffect(() => {
    setBook(Book.eBooks);
  }, [])

  function handelSearch(e) {

    const result = Book.eBooks.filter(b => { return b.language.toLowerCase().includes(e.target.value.toLowerCase()) });
    console.log(result);
    setBook(result)

  
  }
  function handelFilter(e) {
    const price = e.target.value.split('-')

    const result = Book.eBooks.filter((book) => {
      return book.price >= price[0] && book.price <= price[1]
    })
    console.log(price);
    setBook(result)

  }
  return (
    <>
      <Nav />
      <div className="w-1/4 m-5">
        <Search handelSearch={handelSearch} handelFilter={handelFilter} />
      </div>
      <div className='flex justify-center mt-10 flex-wrap	'>
        {book.map(Book => {
          return <Card book={Book} key={Book.id} />
        })}
      </div>
    </>
  );
}

export default App;