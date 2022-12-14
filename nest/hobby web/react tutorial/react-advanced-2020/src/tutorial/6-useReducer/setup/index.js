import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModelOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              REMOVE
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;

// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../../../data";
// // reducer function
// const reducer = (state, action) => {
//   console.log(state);

//   if (action.type === "ADD_ITEM") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       people: newPeople,
//       isModelOpen: true,
//       modalContent: "item added",
//     };
//   }
//   if (action.type === "NO_VALUE") {
//     return { ...state, isModelOpen: true, modalContent: "pls enter value" };
//   }
//   if (action.type === "CLOSE_MODAL") {
//     return { ...state, isModelOpen: false };
//   }
//   if (action.type === "REMOVE_ITEM") {
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload
//     );
//     return { ...state, people: newPeople };
//   }
//   throw new Error("no matching action type");
// };
// const defaultState = {
//   people: [],
//   isModelOpen: false,
//   modalContent: "",
// };

// const Index = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name) {
//       const newItem = { id: new Date().getTime().toString(), name };
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       setName("");
//     } else {
//       dispatch({ type: "NO_VALUE" });
//     }
//   };

//   const closeModal = () => {
//     dispatch({ type: "CLOSE_MODAL" });
//   };
//   return (
//     <>
//       {state.isModelOpen && (
//         <Modal closeModal={closeModal} modalContent={state.modalContent} />
//       )}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {state.people.map((person) => {
//         return (
//           <div key={person.id} className="item">
//             <h4>{person.name}</h4>
//             <button
//               onClick={() => {
//                 dispatch({ type: "REMOVE_ITEM", payload: person.id });
//               }}
//             >
//               REMOVE
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../../../data";
// import { reducer } from './../final/reducer';
// reducer function

// const Index = () => {
//   const [name, setName] = useState("");
//   const [people, setPeople] = useState(data);
//   const [showModel, setShowModel] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       setShowModel(true);
//       setPeople([...people, { id: new Date().getTime().toString(), name }]);
//       console.log(setPeople);
//       setName("");
//     } else {
//       setShowModel(true);
//     }
//   };
//   return (
//     <>
//       {showModel && <Modal />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {people.map((person) => {
//         console.log(person);
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;
