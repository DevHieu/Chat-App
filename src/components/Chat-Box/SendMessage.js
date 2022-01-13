import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import style from "./SendMessage.module.css";

export default function SendMessage({ scroll }) {
  const user = auth.currentUser;

  const name = user.displayName;
  const photoURL = user.photoURL;
  const uid = user.uid;
  const [msg, setMsg] = useState("");

  function handleSendMessage() {
    const docRef = collection(db, "messages");
    const payload = {
      text: msg,
      photoURL: photoURL,
      name: name,
      uid: uid,
      createdAt: serverTimestamp(),
    };
    addDoc(docRef, payload);
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={style.wrapper}>
      {/* <input
        value={msg}
        onChange={(data) => setMsg(data.target.value)}
        placeholder="Type a message..."
        type="text"
        className={style.inputBox}
      />
      <p
        className={style.sendButton}
        onClick={handleSendMessage}
        disabled={msg === ""}
      >
        send
      </p> */}
      <form onSubmit={handleSendMessage}>
        <input
          className={style.inputBox}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="say something nice"
        />

        <button className={style.sendButton} type="submit" disabled={!msg}>
          SEND
        </button>
      </form>
    </div>
  );
}
