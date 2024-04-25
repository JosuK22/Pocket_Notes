import React, { useEffect } from "react";
import Note from "./Note";
import "./css/NoteList.scss";
function NoteList({ heading, notes }) {
  useEffect(() => {}, [notes]);
  

  return (
    <div className="Nlist">
      <ul className="Notes-List">
        {notes.map((note, index) => {
          
          return <Note note={note} key={index} />;
        })}
        ;
      </ul>
    </div>
  );
}

export default NoteList;
