import React from "react";

const title = "Title";
const content = "content of the note";

function Note() {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;
