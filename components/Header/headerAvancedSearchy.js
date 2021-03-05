import { useState, useReducer, useRef } from "react";

const menuItemsInitial = [
  { id: 0, text: "Lugares para hospedarse", op: 0, active: true },
  { id: 1, text: "Experiencias", op: 0, active: false },
  { id: 2, text: "Experiencias en linea", op: 0, active: false },
];

export const HeaderAvancedSearch = () => {
  const [menuItems, setMenuItems] = useState(menuItemsInitial);

  const handleActive = async (id) => {
    const _menuItems = [...menuItems];

    await _menuItems.map((item) => (item.active = false));
    _menuItems[id].active = true;
    setMenuItems(_menuItems);
  };

  return (
    <div className="">
      <div>
        <ul className="flex flex-row w-4/5  cursor-pointer   mx-auto justify-between text-lg">
          {menuItems &&
            menuItems.map((item) => (
              <Item item={item} handleActive={handleActive} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export function Item({ item, handleActive }) {
  const [op, setOp] = useState(0);
  return (
    <li key={item.id} onClick={(id) => handleActive(item.id)}>
      <a onMouseOver={() => setOp(100)} onMouseLeave={() => setOp(0)}>
        {item.text}
      </a>

      <div
        className={
          item.active
            ? "h-1 w-6 mt-2 text-center border-gray-600 border-b-2 mx-auto "
            : `h-1  w-2 opacity-${op} mt-2 text-center  border-gray-600 border-b-2 mx-auto `
        }
      ></div>
    </li>
  );
}
