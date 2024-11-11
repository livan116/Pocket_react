import React from "react";
import style from "./NotesPage.module.css";
import img from "../assets/image.png";
import lock from "../assets/vector.png";

export default function NotesPage() {
  return (
    <div className={style.container}>
      <div className={style.items}>
        <img src={img} alt="Illustration of Pocket Notes" className={style.mainImage} />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
      </div>
      <div className={style.encrypt}>
        <img src={lock} alt="Lock icon" className={style.lockIcon} /> end-to-end encrypted
      </div>
    </div>
  );
}
