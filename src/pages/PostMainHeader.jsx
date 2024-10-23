import React from "react";
import { LinearArrowsActionLogin21 } from "../icons/LinearArrowsActionLogin21";
import { LinearMapLocationMapPoint1 } from "../icons/LinearMapLocationMapPoint1";
import { LinearNotificationsBell } from "../icons/LinearNotificationsBell";
import { LinearUsersUserRounded1 } from "../icons/LinearUsersUserRounded1";
import { MatzipByFunction2 } from "./MatzipByFunction2";
import "./styled.css";

function PostMainHeader () {
  return (
    <div className="post-main-view">
        <div className="navbar">
        <div className="overlap-group-4">
            <div className="element" />

            <div className="text-wrapper-41">AMADDA!</div>

            <div className="FOOD-DIARY">FOOD &amp; DIARY</div>
        </div>
        <div className="navbtn">
          <div className="container-8">
            <div className="text-wrapper-33">맛집 찾기</div>
          </div>

          <div className="container-9">
            <div className="text-wrapper-34">일기 보기</div>
          </div>

          <div className="container-10">
            <div className="text-wrapper-35">카테고리별 일기 찾기</div>
          </div>
        </div>
        <div className="form">
          <div className="overlap-group-3">
            <div className="input-2">
              <div className="container-11">
                <input type="text" className="text-wrapper-36" placeholder="검색어를 입력해 주세요."/>
              </div>
            </div>

            <img className="SVG" alt="Svg" src="/img/svg.svg" />
          </div>
        </div>
        <div className="navemoji">
          <div>
          <LinearArrowsActionLogin21 className="linear-arrows-action" />
          <div className="text-wrapper-37">로그인</div>
          </div>

          <div>
            <LinearMapLocationMapPoint1 className="linear-map-location" />
            <div className="text-wrapper-38">코인결제</div>
          </div>

          <div>
            <LinearNotificationsBell className="linear-notifications" />
            <div className="text-wrapper-39">구독 신청</div>
          </div>

          <div>
            <LinearUsersUserRounded1 className="linear-users-user" />
            <div className="text-wrapper-40">마이</div>
          </div>

        </div>
      </div>
      <MatzipByFunction2></MatzipByFunction2>
    </div>
  );
};

export default PostMainHeader;