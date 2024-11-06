import React, { useState } from "react";
import style from "./Modal.module.css";
export default function Modal({ click, create }) {
  if (!click) return null;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input === "") {
      alert("hello");
    } else {
      create(input);
    }
    click(false);
  };
  return (
    <div>
      <div className={style.modal}>
        <div className={style.modalChildren}>
          <div className={style.heading}>Create New group</div>
          <div className={style.name}>
            <label>Group Name</label>
            <input
              type="text"
              placeholder="Enter group name"
              onChange={handleChange}
              value={input}
            />
          </div>
          <div className="chooseColors">
            <div className={style.color}>Choose colour</div>
          </div>
          <div className={style.createBtn}>
            <button className={style.create} onClick={handleClick}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
