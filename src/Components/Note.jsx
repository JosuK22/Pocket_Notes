import React from "react";
import "./css/Note.scss";

function Note({ note }) {

  return (

    <div className="Note-Container">
      <div className="Note-Content">{note.note}</div>
      <div className="Note-footer">
        
        {note.date + " "}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#353535" />
        </svg>{" "}
        {" " + note.time}
      </div>
    </div>
  );
}

export default Note;
