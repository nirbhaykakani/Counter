import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />

      <div className="container text-center">

        <div className="col-12">
            <h1 className="fw-bold fs-3 text-secondary mb-3">
                <i className="fa-solid fa-calculator me-2 text-primary"></i>
                REACT COUNTER
            </h1>

            <div className="display-1 fw-bold">
                {count}
            </div>

            <div className="text-muted small">
                Click the actions below to manipulate the state
            </div>
        </div>

        <div className="row g-3 mt-4">

            <div className="col-md-4">
                <button onClick={decrement} className="btn btn-outline-danger w-100 py-3 fw-bold">
                    <i className="fa-solid fa-minus me-2"></i>
                    DECREASE
                </button>
            </div>

            <div className="col-md-4">
                <button onClick={reset} className="btn btn-primary w-100 py-3 fw-bold">
                    <i className="fa-solid fa-rotate-left me-2"></i>
                    RESET
                </button>
            </div>

            <div className="col-md-4">
                <button onClick={increment} className="btn btn-outline-success w-100 py-3 fw-bold">
                    <i className="fa-solid fa-plus me-2"></i>
                    INCREASE
                </button>
            </div>

        </div>

    </div>
    </div>
  );
}

export default Counter;
