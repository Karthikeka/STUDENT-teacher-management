import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidenav from "./Components/Sidenav";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/books' element={<BookList />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;