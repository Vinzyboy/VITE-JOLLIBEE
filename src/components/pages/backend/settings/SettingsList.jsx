import React from "react";
import { FaChevronRight, FaDev, FaUser, FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SettingsList = () => {
  const links = [
    {
      title: "Role",
      slug: "/admin/settings/role",
      icon: <FaUserCog size={17} />,
    },
    {
      title: "Developer",
      slug: "/admin/settings/developer",
      icon: <FaDev size={17} />,
    },
    {
      title: "Users",
      slug: "/admin/settings/users",
      icon: <FaUser size={17} />,
    },
  ];

  return (
    <>
      <ul>
        {links.map((item, key) => {
          return (
            <li key={key} className="flex gap-2 text-base items-center">
              <NavLink
                to={`${item.slug}`}
                className="flex items-center justify-between gap-2 py-2 w-full hover:bg-gray-100/5"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </div>
                <div>
                  <FaChevronRight />
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SettingsList;
