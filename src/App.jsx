import React, { useEffect, useState } from "react";
import NotesPage from "./components/NotesPage";
import GroupList from "./components/GroupList";
import Modal from "./components/Modal";
import "./App.css";
import Notes from "./components/Notes";

const localStorage_item = "data_item";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const [istrue, setIstrue] = useState(false);

  const [groups, setGroups] = useState(() => {
    const storedList = localStorage.getItem(localStorage_item);
    return storedList ? JSON.parse(storedList) : [];
  });

  const [active, setActive] = useState(null);
  const [activeNotes, setActiveNotes] = useState([]);

  const handleCreateGroup = (name, color, x) => {
    const newGroup = { name, color, x };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem(localStorage_item, JSON.stringify(updatedGroups));
  };

  const Screen = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [screenSize, setScreenSize] = useState(Screen());

  const handleList = (name, color, x) => {
    setActive({ name, color, x });
    setIsRightOpen(true);
    setIstrue(!istrue);
  };

  const handleSaveNote = (updatedNotes) => {
    if (active) {
      localStorage.setItem(active.name, JSON.stringify(updatedNotes));
    }
    setActiveNotes(updatedNotes);
  };

  useEffect(() => {
    if (active) {
      const savedNotes = JSON.parse(localStorage.getItem(active.name)) || [];
      setActiveNotes(savedNotes);
    }
  }, [active]);

  useEffect(() => {
    const Screen = () => {
      setScreenSize(Screen());
    };
    window.addEventListener('resize', Screen);
    localStorage.setItem(localStorage_item, JSON.stringify(groups));
  }, [groups]);

  return (  
    <>
    {screenSize.width < 989 ?(
      <div className="components">
        <div className={istrue?"display":""}>
          <GroupList
            onAddClick={() => setModalOpen(true)}
            groups={groups}
            handleList={handleList}
          />
        </div>
        <div className={istrue?"":"right"}>
        {isRightOpen  && (
          <Notes size={screenSize.width} istrue = {istrue} setIstrue={setIstrue} arr={active} savedNotes={activeNotes} save={handleSaveNote} />
        )}
        </div>
      </div>):(
      <div className="components">
          <GroupList
            onAddClick={() => setModalOpen(true)}
            groups={groups}
            handleList={handleList}
          />
        {isRightOpen?(
          <Notes arr={active} savedNotes={activeNotes} save={handleSaveNote} />
        ):(<NotesPage/>)}
      </div>)}
        {isModalOpen && (
          <div className="modal">
            <Modal
              onClose={() => setModalOpen(false)}
              onCreate={handleCreateGroup}
            />
          </div>
        )}

    </>
  );
}
