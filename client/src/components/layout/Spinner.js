import React from "react";
import spinner from "../../img/fishSpinner.gif";

export default () => (
  <>
    <img
      src={spinner}
      style={{ width: "150px", margin: "200px auto 0 auto", display: "block" }}
      alt='Loading...'
    />
  </>
);
