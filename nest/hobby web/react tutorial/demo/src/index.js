import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";
import { data } from "./books";
import SpecifiBook from "./Book";
import { greeting } from "./testing/testing";
// const books = [
//   //setup vars
//   {
//     id: 1,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/71ePXM6nOdL._AC_UL604_SR604,400_.jpg",
//     title: "The power of you subconsious mind ss",
//     author: "Moni Gangane",
//   },
//   {
//     id: 2,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL604_SR604,400_.jpg",
//     title: "My First Library: Boxset of 10 Board Books ",
//     author: "Wonder House Books",
//   },
//   {
//     id: 3,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL604_SR604,400_.jpg",
//     title: " 3My First Library: Boxset of 10 Board Books ",
//     author: "3",
//   },
// ];

// const author = "Moni Gangane";
// const title = "The power of you subconsious mind ss";
// const img =
//   "https://images-eu.ssl-images-amazon.com/images/I/71ePXM6nOdL._AC_UL604_SR604,400_.jpg";

const names = ["moni", "trji"];
const newName = names.map((name, index) => {
  return <h1 key={index + 1}>{name}</h1>;
});
// console.log(newName);
function BookList() {
  console.log(greeting);
  return (
    <>
      <section className="booklist">
        {data.map((book, index) => {
          // const { img, title, author } = book;
          // console.log(book);
          return <SpecifiBook key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}
// const Book = (props) => {
//   // console.log(props);
//   //destructre props
//   const { img, title, author, id } = props;
//   const clickHanlder = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("hello world");
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <>
//       <article
//         className="book"
//         onMouseOver={() => {
//           console.log(title);
//         }}
//       >
//         <p>{id}</p>
//         <img src={img} alt="not present img" />
//         <h1 onClick={() => console.log(title)}>{title}</h1>
//         <h4 style={{ color: "red", marginTop: "0.25rem", fontSize: "0.75rem" }}>
//           {author}
//         </h4>
//         <button type="button" onClick={clickHanlder}>
//           click me
//         </button>
//         <button type="button" onClick={() => complexExample(author)}>
//           click me alls
//         </button>
//       </article>
//     </>
//   );
// };

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }
// const Person = () => {
//   return (
//     <>
//       <p>Moni bookstore</p>
//     </>
//   );
// };

// const Message = () => {
//   return (
//     <>
//       <div>
//         <h1>hello moni</h1>

//         <input type="button" value="hello" />
//       </div>
//     </>
//   );
// };

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello moni");
// };

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello moni")
//   );
// };
ReactDOM.render(<BookList />, document.getElementById("root"));
