import React from "react";
import { LinearArrowsActionLogin2 } from "../icons/LinearArrowsActionLogin2";
import { LinearMessagesConversationChatRoundMoney } from "../icons/LinearMessagesConversationChatRoundMoney";
import { LinearNotificationsBell } from "../icons/LinearNotificationsBell";
import { LinearUsersUserRounded1 } from "../icons/LinearUsersUserRounded1";
import { MatzipByFunction2 } from "./MatzipByFunction2";
import PostFooter from "./PostFooter";
import "./css/header.css";

function PostMainHeader () {
  return (
    <div>
      <div className="navbar">
        {/* <div className="overlap-group-4"> */}
        <div className="amadda-logo">
            <div className="amadda-img" />
            <div className="title">AMADDA!</div>

            <div className="subtitle">FOOD &amp; DIARY</div>
        </div>
        <div className="navbtn">
          <div className="btn-matzip">
            <div className="text-matzip">맛집 찾기</div>
          </div>

          <div className="btn-diary">
            <div className="text-diary">일기 보기</div>
          </div>

          <div className="btn-category">
            <div className="text-category">카테고리별 일기 찾기</div>
          </div>
        </div>
        <div className="form">
          <div className="form-container">
            <div className="form-input-container">
              <input type="text" className="text-form" placeholder="검색어를 입력해 주세요."/>
            </div>

            <img className="search-img" alt="Svg" src="/img/svg.svg" />
          </div>
        </div>
        <div className="navemoji">
          <div className="loginicon">
            <LinearArrowsActionLogin2 className="linear-arrows-action" />
            <p className="text-login">로그인</p>
          </div>

          <div className="coinicon">
            <LinearMessagesConversationChatRoundMoney className="linear-map-location" />
            <p className="text-coin">코인결제</p>
          </div>

          <div className="subicon">
            <LinearNotificationsBell className="linear-notifications" />
            <p className="text-sub">구독신청</p>
          </div>

          <div className="myicon">
            <LinearUsersUserRounded1 className="linear-users-user" />
            <p className="text-my">마이</p>
          </div>
        </div>
    </div>
    <div className="main">
      <MatzipByFunction2/>
    </div>
    <div className="footer">
      <PostFooter/>
    </div>
  
  </div>
    
  );
};

export default PostMainHeader;