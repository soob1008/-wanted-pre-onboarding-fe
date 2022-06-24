import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlinePushpin,
  AiOutlineSmile,
} from "react-icons/ai";

const FeedItem = () => {
  return (
    <div className="feed-item">
      <div className="feed-info">
        <div className="user">
          <span></span>
          <strong>Pre_onboarding</strong>
        </div>
        <AiOutlineEllipsis />
      </div>
      <div className="feed-img">
        <img src="https://source.unsplash.com/random/600x500" alt="" />
      </div>
      <div className="feed-utils">
        <div className="feed-menu">
          <ul>
            <li>
              <button type="button">
                <AiOutlineHeart />
              </button>
            </li>
            <li>
              <Link to="/">
                <AiOutlineMessage />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineSend />
              </Link>
            </li>
          </ul>
          <button type="button">
            <AiOutlinePushpin />
          </button>
        </div>
        <div className="feed-comment_list">
          <strong>좋아요 1,000개</strong>
          <ul>
            <li>
              <p>
                <strong>이름</strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                labore tenetur id, enim harum ipsum assumenda voluptate officia
                quibusdam. Ad tempore tempora quis ab blanditiis quaerat eius
                libero hic amet!
              </p>
            </li>
            <li>
              <p>
                <strong>이름</strong>ㅁㄴㅇㄴㅁㅇㅁㄴㅇ
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="feed-comment_input">
        <div className="input">
          <AiOutlineSmile />
          <input type="text" className="w100" />
        </div>
        <button type="button">게시</button>
      </div>
    </div>
  );
};

export default FeedItem;
