import Image from "next/image";
import React from "react";

const Additional = ({ block, dataBinding }) => {
  const { title, qusetion1, description1, qusetion2, description2} = block;
 
  return (
    <div data-cms-bind={dataBinding}>
     
    </div>
  );
};

export default Additional;