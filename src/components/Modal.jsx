import React, { useState } from "react";
import style from "./Modal.module.css";

export default function Modal({ onClose, onCreate }) {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  const [errors, setErrors] = useState({ name: false, color: false });

  const bgColors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleSubmit = () => {
    const hasError = input === "" || color === "";
    setErrors({ name: input === "", color: color === "" });
    let x = shortName();
    if (!hasError) {
      onCreate(input, color, x);
      onClose();
    }
  };

  const shortName = () => {
    let sName = input.split(" ");
    let str = "";
    if (sName.length >= 2) {
      sName.forEach((element) => {
        str += element[0];
      });
      return str.slice(0, 2).toUpperCase();
    } else {
      return sName[0][0].toUpperCase();
    }
  };

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalChildren} onClick={(e)=>e.stopPropagation()} >
        <div className={style.heading}>Create New Group</div>
        <div className={style.name}>
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setErrors({ ...errors, name: false });
            }}
          />
        </div>
        <div className={style.error}>
          {errors.name && (
            <p className={style.errorColor}>Please enter a group name</p>
          )}
        </div>
        <div className={style.chooseColors}>
          <p>Choose Color</p>
          <div className={style.colors}>
            {bgColors.map((bgColor, index) => (
              <button
                key={index}
                className={`${style.colorBtn} ${
                  color === bgColor ? style.selected : ""
                }`}
                style={{ backgroundColor: bgColor }}
                onClick={() => {
                  setColor(bgColor);
                  setErrors({ ...errors, color: false });
                }}
              />
            ))}
          </div>
        </div>
        <div className={style.error}>
          {errors.color && (
            <p className={style.errorColor}>
              Please select a color for the group
            </p>
          )}
        </div>
        <div className="createBtn">
          <button className={style.create} onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
