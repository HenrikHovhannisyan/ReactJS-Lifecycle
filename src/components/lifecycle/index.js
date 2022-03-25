import React from "react";

function Lifecycle (props) {
    fetch(props.link)
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <></>
  );
}

export default Lifecycle;