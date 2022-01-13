import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import style from "./SignOut.module.css";

export default function SignOut() {
  const SignOut = () => {
    signOut(auth);
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>super Chat</h1>
      <p className={style.signoutButton} onClick={SignOut}>Sign Out</p>
    </div>
  );
}
