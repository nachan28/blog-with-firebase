import React, { useState } from "react";
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();
  const post = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: auth.currentUser.displayName
    });
    navigate("/");
  };
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            type="text"
            placeholder="投稿内容を記入"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <button className="postButton" onClick={post}>
          投稿する
        </button>
      </div>
    </div>
  );
};
