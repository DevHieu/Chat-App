import React from "react";
import { auth } from "../../firebase/config";
import style from "./login.module.css";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function login() {
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, GoogleProvider);
  };
  const handleFbLogin = () => {
    signInWithPopup(auth, FacebookProvider);
  };

  return (
    <div className={style.loginWrapper}>
      <h1 className={style.title}>Super Chat Box</h1>
      <button onClick={handleGoogleLogin} className={style.googleButton}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
        <p className={style.loginTitle}>
          <b>Sign in with google</b>
        </p>
      </button>
      <button onClick={handleFbLogin} className={style.facebookButton}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/24px-2021_Facebook_icon.svg.png" />
        <p className={style.loginTitle}>
          <b>Sign in with facebook</b>
        </p>
      </button>
    </div>
  );
}

export default login;
