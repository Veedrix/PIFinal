//Firebase Config
import { app, databaseApp } from "../services/firebaseConfig";
//Firebase Dependencias
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
//Dependencias React/Firebase
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { ChatMessageModule } from "./ChatMessagesModule";

const auth = getAuth(app);

export const ChatRoomModule = () => {
  const dummy = useRef();
  const messagesRef = collection(databaseApp, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="mainChat">
        {messages &&
          messages.map((msg, index) => (
            <ChatMessageModule key={index} message={msg} />
          ))}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button className="buttonChat" type="submit" disabled={!formValue}>
          Enviar
        </button>
      </form>
    </>
  );
};

export default ChatRoomModule;