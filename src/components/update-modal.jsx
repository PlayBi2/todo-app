import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

const UpdateModal = ({ text, setIsOpen }) => {
  const [value, setValue] = useState("");

  const updateTask = async () => {
    const taskRef = doc(db, "todos", text.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(taskRef, {
      name: value,
    });
  };

  return (
    <form
      action=""
      className="flex w-full border-purple-600 border-solid border-2 items-center mt-2 rounded-sm overflow-hidden mb-2"
      onSubmit={(e) => {
        e.preventDefault();
        setValue("");
        setIsOpen(false);
        updateTask();
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="What is new task?"
        className="flex-1 block outline-none bg-transparent px-2 py-1"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="bg-purple-500 px-2 py-2 transition-all duration-100 ease-linear hover:bg-purple-600"
      >
        Update Task
      </button>
    </form>
  );
};

export default UpdateModal;
