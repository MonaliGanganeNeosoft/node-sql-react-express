import React, { useEffect } from "react";

const InlineCondin = () => {
  //   useEffect(() => {
  //     let age = 26;
  //     let name = "Moni";
  //     if (age > 26) {
  //       console.log("you are old age");
  //     } else if (age === 26 && name === "Moni") {
  //       console.log("My age is 26");
  //       console.log("My name is Moni");
  //     } else {
  //       console.log("My age is not  26");
  //       console.log("My name is not Moni");
  //     }
  //   }, []);
  let age = 26;
  let name = "Moni";
  //   age > 26 ? (
  //     console.log("you are old")
  //   ) : age === 26 && name === "Moni" ? (
  //     <>
  //       {" "}
  //       {console.log("i am 26")} {console.log("My name is Moni")}
  //     </>
  //   ) : (
  //     <>
  //       {console.log("i am not 26")} {console.log("My name is not Moni")}
  //     </>
  //   );

  return (
    <>
      {age > 26 ? (
        console.log("i am old")
      ) : age === 26 && name === "Moni" ? (
        <>
          <h1>I am 26 years old</h1>
          <h1>i am moni</h1>
        </>
      ) : (
        <>
          <h1>I am not 26 years old</h1>
          <h1>i am not moni</h1>
        </>
      )}
    </>
  );
};

export default InlineCondin;
