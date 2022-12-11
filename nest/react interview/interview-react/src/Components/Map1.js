import React, { useEffect, useState } from "react";

const Map1 = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
    //   .then((json) => console.log(json));
  }, []);
  //   const mapdata = () => {
  //     let mapdataArray = users.map((user) => user.id * 2);
  //     console.log(mapdataArray);
  //   };

  //   const mapdata = () => {
  //     let filterData = users.filter((user) => {
  //       return user.name.includes("a");
  //     });
  //     console.log(filterData);
  //   };

  //   const mapdata = () => {
  //     let filterData = users.filter((user) => {
  //       return user.name === "Leanne Graham";
  //     });
  //     console.log(filterData);
  //   };

  //   const mapdata = () => {
  //     let filterData = users.filter((user) => {
  //       return user.id <= 5;
  //     });
  //     console.log(filterData);
  //   };

  //   const mapdata = () => {
  //     let filterData = users.filter((user) => {
  //       return user.id <= 5;
  //     });
  //     setUsers(filterData);
  //   };

  //   const mapdata = () => {
  //     // let filterData = users.filter((user) => {
  //     //   return user.id > 5;
  //     // });
  //     // setUsers(filterData);

  //     const number = numbers.map((no) => {
  //       return no * no;
  //     });
  //     setNumbers(number);
  //   };

  //   const mapdata = () => {
  //     const noFilter = numbers
  //       .filter((no) => {
  //         return no >= 5;
  //       })
  //       .map((no) => {
  //         return no * no;
  //       });
  //     setNumbers(noFilter);
  //   };

  const mapdata = () => {
    const noMap = numbers
      .map((no) => {
        return no * no;
      })
      .filter((no) => {
        return no <= 50;
      });
    setNumbers(noMap);
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="card" style={{ width: "18rem" }}>
          <div className="card-body" key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        </div>
      ))}
      {numbers.map((no) => (
        <div className="card" style={{ width: "18rem" }}>
          {no}
        </div>
      ))}
      <button onClick={mapdata}>see mapped array</button>
    </>
  );
};

export default Map1;
