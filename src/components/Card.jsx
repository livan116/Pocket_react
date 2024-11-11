import React from 'react'
import style from "./Card.module.css"

export default function Card({name}) {
  return (
    <div>
      <div className={style.container}>
      <ul className={style.list}>
      {name.map((note,index)=>(<div key={index} className={style.listItem}><li  className={style.cardItem}><p>{note.text}</p>
                    <div className={style.noteInfo}>
                        <span>{note.date}</span>
                        <span>•</span>
                        <span>{note.time}</span>
                    </div></li>
      </div>)
      )} 
      </ul>
      </div>
    </div>
  )
}
