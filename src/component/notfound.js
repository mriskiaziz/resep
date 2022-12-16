import React from "react";

const Notfound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-secondary">404</h2>
        <h2 className="text-secondary">Page Not Found</h2>
      </div>
    </div>
  );
};

export default Notfound;
