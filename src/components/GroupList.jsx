import React, { useState } from "react";
import style from "./GroupList.module.css";

export default function GroupList({ onAddClick, groups, handleList }) {
  
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null); 
  
  const handleClick = (index) =>{
    setSelectedButtonIndex(index);
  }
  return (
    <div className={style.left}>
      <h1 className={style.heading}>Pocket Notes</h1>
      <div className={style.container}>
        <ul className={style.list}>
        {groups.map(({ name, color, x }, index) => (
          <div key={index} className={`${style.listItem} ${
              selectedButtonIndex === index  ? style.selected : ""
            }`}>
          <li
            onClick={() => {
              handleClick(index)
              handleList(name, color, x);
            }}
          >
            <span className={style.icon} style={{ backgroundColor: color }}>
              {x}
            </span>
            {name}
          </li>
          </div>
        ))}
        </ul>
        <span className={style.plus}>
          <button className={style.plusBtn} onClick={onAddClick}>
            +
          </button>
        </span>
      </div>
    </div>
  );
}
