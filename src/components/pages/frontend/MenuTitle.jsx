import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const MenuTitle = ({ categoryName }) => {
  return (
    <>
      <div className="p-4 text-white gap-5 bg-myred flex items-center">
        <img src={`${imgPath}/jollibeelogo.png`} alt="" />
        <h2 className="mb-0">{categoryName}</h2>
      </div>
    </>
  );
};

export default MenuTitle;
