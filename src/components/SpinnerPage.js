import React from "react";

const SpinnerPage = () => {
  return (
    <div className="text-align-center" style={{height:"100vh"}}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default SpinnerPage;