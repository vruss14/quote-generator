import React from "react";

// The container that holds the results from searching the API

function Container(props) {

  return (
      <div className = "container container-fluid d-flex min-vw-100 min-vh-100 justify-content-center align-items-center bg-dark text-white">
          <h1 className="mb-5 has-text-centered is-size-1 has-text-weight-bold">Test Heading</h1>
          {props.children}
      </div>
  );
}

export default Container;