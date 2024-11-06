import React from "react";
import style from "./GroupList.module.css";
export default function GroupList({click,name}) {
  const handleName = (name) =>{
    console.log(name)
    return "hello"
  }
  return (
    <div className={style.left}>
      <h1 className={style.heading}>Pocket Notes</h1>
      <div className={style.container}>
        <div className={style.list}>
          <ul>
          {name.map((item,index)=>(
            <li key={index}><span>{()=>handleName(item)}</span>{item}</li>
          ))}
            
          </ul>
        </div>
      </div>
      <div className={style.plus}>
            <button className={style.plusBtn} onClick={()=>click(true)}>+</button>
      </div>
    </div>
  );
}
