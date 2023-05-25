import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    // const querySnapshot = await getDocs(collection(db, "todos"));
    // const arr = [];
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   arr.push(doc.data());
    // });
    // // console.log(arr)

    // setTodos(arr);

    const q = query(collection(db, "todos"), orderBy('createAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setTodos(arr);
    });
  };

  useEffect(() => {
    getData();
    setIsLoading(false);
    return () => {
      getData();
    };
  }, []);
  return (
    <AppContext.Provider value={todos}>
      {isLoading ? <>isLoading</> : <>{children}</>}
    </AppContext.Provider>
  );
};

export default AppProvider;
