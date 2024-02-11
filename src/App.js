import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./noteSampleData";
import Header from "./Components/Header";

function App() {


  return (
    
        <div className="main">
          <Header/>
        </div>
    
  );
}

export default App;




// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState } from "react";
// import data from "./noteSampleData";

// function App() {
//   const [inputValue, setInputValue] = useState([]);
//   const [note, setNote] = useState(data);

//   const handleDelete = (id) => {
//     const results = note.filter((note) => note.id !== id);

//     setNote(results);
//   };
//   const handleOnChange = (e) => {
//     e.preventDefault();
//     setInputValue(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setNote([...note, { id: inputValue.length, note: inputValue }]);

//     setInputValue("");
//   };

//   return (
//     <div className="App">
//       <h1>Notes</h1>

//       <form>
//         <input value={inputValue} onChange={handleOnChange} type="text" />

//         <input
//           type="Submit"
//           // value={inputValue}
//           onClick={handleSubmit}
//         />
//       </form>
//       {note ? (
//         note.map((note, i) => {
//           return (
//             <div key={i}>
//               <li key={i}>{note.note}</li>
//               <button onClick={(e) => handleDelete(note.id)} type="button">X</button>
//             </div>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

// export default App;
