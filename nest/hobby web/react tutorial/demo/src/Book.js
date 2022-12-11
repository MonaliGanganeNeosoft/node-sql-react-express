import React from "react";

const Book = (props) => {
  // console.log(props);
  //destructre props
  const { img, title, author, id } = props;
  const clickHanlder = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <>
      <article
        className="book"
        onMouseOver={() => {
          console.log(title);
        }}
      >
        <p>{id}</p>
        <img src={img} alt="not present img" />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4 style={{ color: "red", marginTop: "0.25rem", fontSize: "0.75rem" }}>
          {author}
        </h4>
        <button type="button" onClick={clickHanlder}>
          click me
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          click me alls
        </button>
      </article>
    </>
  );
};

export default Book;
