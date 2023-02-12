import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGithub = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result._tokenResponse);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  };
  return (
    <>
      <div>ログインして始める</div>
      <button onClick={loginWithGithub}>Githubを使ってログイン</button>
    </>
  );
};
