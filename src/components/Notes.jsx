import React, { useState,useEffect } from "react";
import style from "./Notes.module.css";
import Card from "./Card";
import arrow from "../assets/arrow.png"
import selected from "../assets/selected.png"

export default function Notes({arr,savedNotes,save,istrue,setIstrue,size}) {

    const[key,setKey] = useState("")
    const[text,setText] = useState("");
    const[items,setItems] = useState(savedNotes);


    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const getDateTime = () => {
      const data = new Date();
      const date = data.getDate();
      const month = months[data.getMonth()];
      const year = data.getFullYear();
      const min = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
      const hours = data.getHours();
      const ampm = hours < 12 ? `${hours}:${min} AM` : `${hours - 12}:${min} PM`;
      return { date: `${date} ${month} ${year}`, time: ampm };
  };


  useEffect(() => {
    setItems(savedNotes); // Load notes when savedNotes changes
  }, [savedNotes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(items)); // Save notes to local storage whenever items change
}, [items]);

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleClick = () =>{
      const { date, time } = getDateTime();
      const newNote = { text, date, time };
      const newItems = [...items, newNote];
      setItems(newItems);
      save(newItems); // Optional if you want to propagate changes up
      setText("");
    }


    const handleEnter = (e) =>{
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (text.trim()) {
          handleClick();
        }
      }
      }

  return (
    <div>
      <div className={style.container}>
        <div className={style.navHead}>
        {size < 989 &&(<div className={style.button}><button className={style.buttonBtn} onClick={()=>setIstrue(!istrue)}>←</button></div>)
      }
          <div className={style.shortName} style={{ backgroundColor: `${arr.color}` }}>{arr.x}</div>
          <div className={style.name}>{arr.name}</div>
        </div>
        <div className={style.content}>
        <Card name={items}/>
        </div>
        <div className={style.footer}>
          <div className={style.textArea}>
            <textarea
              name="notes"
              id="notes"
              placeholder="Enter your text here....."
              value={text}
              onChange={handleChange}
              onKeyDown={handleEnter}
            ></textarea>
            <div className={style.enter}>
            {text === "" ? (<img src={arrow} className={style.imgColor} alt="submitBtn" />):(<img src={selected} className={style.imgColor}  onClick={handleClick} alt="submitBtn" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
