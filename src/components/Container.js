import React from "react";

function Container(props) {
  // Color Scheme found here: https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/
  const colors = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D'];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  const styles = {
    backgroundColor: randomColor,
    outline: `2px solid ${randomColor}`
  }

  return (
      <main className="container container-fluid d-flex min-vw-100 min-vh-100 justify-content-center align-items-center text-white" style={styles}>
        <div className="d-flex card" id="quote-box">
          <div className="card-body text-black d-flex flex-column justify-content-center align-items-center">
              <div className="row p-4">
                  <div className="quote-container">
                      <p className="fs-4 fw-light" id="random-quote">
                          "This is the default quote, which will be changed later on in development. 
                          The quote has been built up even more to show what will happen when the quote
                          is much lengthier."
                      </p>
                  </div>
                  <p className="text-black text-end pl-3 fw-light">— Author Unknown</p>
              </div>

              <div className="d-flex flex-row mb-3 w-100 justify-content-around text-black">
              <div title="Tweet this quote!" className="d-flex justify-content-center align-items-center" id="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
              </div>
              <button title="Click for a new quote!" type="button" className="btn quote-btn text-white align-self-end" style={styles}>New Quote</button>
          </div>
        </div>
    </div>
      </main>
  );
}

export default Container;