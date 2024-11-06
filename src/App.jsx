import React, { useState } from "react";
import NotesPage from "./components/NotesPage";
import GroupList from "./components/GroupList";
import "./App.css";
import Modal from "./components/Modal"; 
export default function App() {

  const [openModel,setOpenModel] = useState(false);
  const [grpName,setGrpName] = useState([]);

  const handleCreate = (input) =>{
    setGrpName((prev)=>[...prev,input]);
    console.log(grpName)
  }
  const handleAdd = ()=>{
    setOpenModel(!openModel);
  }
  return (
    <>
    <div className="components">
      <GroupList click={handleAdd} name={grpName}/>
      <NotesPage />
    </div>
    {openModel && (<div className="modal">
    <Modal click={handleAdd} create = {handleCreate}/>
    </div>)}
    </>
    
  );
}
