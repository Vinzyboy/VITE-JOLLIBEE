import React from "react";
import { menus } from "../menu-Data";
import { getFoodByCategory } from "./function";

const DashboardCard = ({ item, dataFood }) => {
  const foodItem = getFoodByCategory(item.category_aid, dataFood);
  
  const activeFood = foodItem
    ?.filter((item) => item.food_is_active == 1)
    .reduce((prev, cur) => prev + 1, 0);

  const inactiveFood = foodItem
    ?.filter((item) => item.food_is_active == 0)
    .reduce((prev, cur) => prev + 1, 0);

  return (
    <div className="card bg-secondary p-4 rounded-md border border-line">
      <small>{item.category_title}</small>
      <h2 className="text-3xl mb-2 mt-1">{foodItem?.length}</h2>
      <ul className="flex gap-5 items-center">
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-success block"></span>
          {activeFood} active
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gray-400 block"></span>
          {inactiveFood}
          inactive
        </li>
      </ul>
    </div>
  );
};

export default DashboardCard;
