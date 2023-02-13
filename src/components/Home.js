import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='homePage'>
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReact学習中です。トラちゃんが大好きです。可愛くって仕方がないです。お風呂に入ったほうがいいです。
        </div>
        <div className='nameAndDeleteButton'>
          <h3>@nanako</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home