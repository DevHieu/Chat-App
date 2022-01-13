import React, { useState, useEffect, useRef } from "react";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut/SignOut";
import { db, auth } from "../../firebase/config";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

import "./ChatBox.css";

export default function ChatBox() {
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const collectRef = collection(db, "messages");
    const queries = query(collectRef, orderBy("createdAt"), limit(25));

    const unsubcribe = onSnapshot(queries, (snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubcribe;
  }, [message]);

  return (
    <div className="wrapper">
      <SignOut />
      {message === undefined ? (
        <h1>Sorry, server is full. Please comeback in tomorrow</h1>
      ) : (
        <div className="bodyBox">
          <ul>
            {message.map((data) => (
              <li
                key={data.id}
                className={`msg ${
                  data.uid === auth.currentUser.uid ? "send" : "received"
                }`}
              >
                <img className="photo" src={data.photoURL} alt="photoURL" />
                <div>
                  <p className="text">{data.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}
