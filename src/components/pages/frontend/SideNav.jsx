import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SideNav = () => {
  const menus = [
    {
      img: "nav-value-meal.webp",
      title: "Value Meal",
    },
    {
      img: "nav-chickenjoy.webp",
      title: "Chicken ni Joy",
    },
    {
      img: "nav-burger.webp",
      title: "Burger",
    },
    {
      img: "nav-spaghetti.webp",
      title: "Spaghetti",
    },
    {
      img: "nav-palabok.webp",
      title: "Palabok",
    },
    {
      img: "nav-sides.webp",
      title: "Sides",
    },
  ];
  return (
    <>
      <h5 className="mb-0 text-center pt-2 text-base">Menu</h5>

      <ul>
        {menus.map((item, key) => (
          <li className="mb-3">
            <button>
              <img src={`${imgPath}/${item.img}`} alt="" />
              <small className="text-xs">{item.title}</small>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNav;
