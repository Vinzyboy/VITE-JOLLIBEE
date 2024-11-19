import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const MenuTitle = () => {
  return (
    <>
      <div className="p-4 text-white gap-5 bg-primary flex items-center">
              <img src={`${imgPath}/jollibeelogo.png`} alt="" />
              <h2 className="mb-0">Palabok</h2>
      </div>
    </>
  );
};

export default MenuTitle;
