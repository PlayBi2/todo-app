import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import UpdateModal from "./update-modal";

const Todo = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeTask = async () => {
    await deleteDoc(doc(db, "todos", text.id));
  };

  return (
    <>
      <div className="flex items-center justify-between bg-purple-500 p-2 my-4 rounded-md">
        <p className="flex-1 pr-4">{text.name}</p>
        <div>
          <button className="p-1 px-2 ml-3 text-lg">
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => setIsOpen(true)}
            />
          </button>
          <button
            className="p-1 px-2 ml-3 text-lg"
            onClick={() => removeTask()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {isOpen && <UpdateModal text={text} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Todo;
