import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import "./notes.css";
import { v4 as uuid } from "uuid";
import Note from "./Note";

const Notes = () => {
  const [inputText, setInputText] = useState(""); // state used for the typed input in text box
  const [notes, setNotes] = useState([]); // state of notes saved 
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    if (editToggle) { // set the edited note of  one previously written 
      setNotes(
        notes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else { // If not is not edited set as a new written note
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }

    setInputText(" "); // sets input box to empty
    setEditToggle(null); 
  };


  //delete a note 
  const deleteHandler = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };


  //
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  },[]);



  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
    console.log(JSON.stringify(notes))
  }, [notes]);



  return (
    <div className="notes">

      {notes.map((note) =>
        editToggle === note.id ?
         (
            //Edits a notes
          <CreateNote
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        )
        
        
        : 
        //SAVED NOT ON SCREEN 
        (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          ></Note>
        )
      )}
      {
      //toggles edit note 
      editToggle === null ? (
        <CreateNote
          inputText={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      ) : (
        <>ERROR NO NOTES! </>
      )}
    </div>
  );
};

export default Notes;
