import React from "react";
import { ColorRing } from "react-loader-spinner";

//Loader component
function Loader() {
  return (
    <div className="flex justify-center items-center">
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#000"]}
      />
    </div>
  );
}

export default Loader;
