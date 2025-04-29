import React from "react";

function Links({github,linkedin}) {
console.log(github, linkedin);
  return (
    <>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </>
  );
}

export default Links;