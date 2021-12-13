import React from "react";

// The container that holds the results from searching the API

function Container(props) {

  return (
      <main className = "container container-fluid d-flex min-vw-100 min-vh-100 justify-content-center align-items-center bg-dark text-white">
          {props.children}
      </main>
  );
}

export default Container;