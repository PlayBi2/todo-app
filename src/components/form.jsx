import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

const Form = () => {
  const [text, setText] = useState("");

  const randomNumber = Math.floor(Math.random() * 100000) + 1;

  const handleSubmit = async () => {
    const docRef = await setDoc(doc(db, "todos", `${randomNumber + text}`), {
      name: text,
      id: randomNumber + text,
      createAt: serverTimestamp(),
    });
  };

  return (
    <form
      action=""
      className="flex w-full border-purple-600 border-solid border-2 items-center mt-10 rounded-sm overflow-hidden mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setText("");
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="What is the task today?"
        className="flex-1 block outline-none bg-transparent px-2 py-1"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="submit"
        className="bg-purple-500 px-2 py-2 transition-all duration-100 ease-linear hover:bg-purple-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
