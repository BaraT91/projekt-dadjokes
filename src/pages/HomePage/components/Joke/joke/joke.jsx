import React, { useState } from 'react';
import './joke.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button className="btn-like btn-like--up" onClick={handleLike}></button>
        <span className="likes-count likes-count--up">{likeCount}</span>
        <button
          className="btn-like btn-like--down"
          onClick={handleDislike}
        ></button>
        <span className="likes-count likes-count--down">{dislikeCount}</span>
      </div>
    </div>
  );
};
