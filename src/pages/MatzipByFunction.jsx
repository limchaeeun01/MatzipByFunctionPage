import React, { useState, useEffect } from "react";
import "./css/style.css";
import PostMainHeader from "./PostMainHeader";
import PostFooter from "./PostFooter";
import PostList from "../list/PostList";

import { Container, Grid } from '@mui/material';

export const MatzipByFunction = () => {

  /* 무한 롤링 배너 */
  /* 이건 그냥 5개 돌아가게 하는 리스트 */
  const teamImages = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 2},
    { id: 3},
  ];

  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  /* 감정 버튼 */
  const [activeLabels, setActiveLabels] = useState([]);

  const handleLabelClick = (label) => {
    if (activeLabels.includes(label)) {
      setActiveLabels(activeLabels.filter((item) => item !== label));
    } else {
      setActiveLabels([...activeLabels, label]);
    }
  };

  /* 테스트 데이터 */
  const testData = [
    { id: 1, userName: 'User1', diaryTitle: 'DiaryTitle1', isReceiptVerified: true, pinColor: 'RED' },
    { id: 2, userName: 'User2', diaryTitle: 'DiaryTitle2', isReceiptVerified: false, pinColor: 'PURPLE' },
    { id: 3, userName: 'User3', diaryTitle: 'DiaryTitle3', isReceiptVerified: true, pinColor: 'BLUE' },
    { id: 4, userName: 'User4', diaryTitle: 'DiaryTitle4', isReceiptVerified: true, pinColor: 'YELLOW' },
    { id: 5, userName: 'User5', diaryTitle: 'DiaryTitle5', isReceiptVerified: false, pinColor: 'RED' },
    { id: 6, userName: 'User6', diaryTitle: 'DiaryTitle6', isReceiptVerified: true, pinColor: 'BLUE' },
    { id: 7, userName: 'User7', diaryTitle: 'DiaryTitle7', isReceiptVerified: true, pinColor: 'PURPLE' },
    { id: 8, userName: 'User8', diaryTitle: 'DiaryTitle8', isReceiptVerified: false, pinColor: 'YELLOW' },
    { id: 9, userName: 'User9', diaryTitle: 'DiaryTitle9', isReceiptVerified: true, pinColor: 'RED' },
    { id: 10, userName: 'User10', diaryTitle: 'DiaryTitle10', isReceiptVerified: false, pinColor: 'BLUE' },
    { id: 11, userName: 'User11', diaryTitle: 'DiaryTitle11', isReceiptVerified: true, pinColor: 'PURPLE' },
    { id: 12, userName: 'User12', diaryTitle: 'DiaryTitle12', isReceiptVerified: true, pinColor: 'YELLOW' },
    { id: 13, userName: 'User13', diaryTitle: 'DiaryTitle13', isReceiptVerified: true, pinColor: 'RED' },
    { id: 14, userName: 'User14', diaryTitle: 'DiaryTitle14', isReceiptVerified: false, pinColor: 'BLUE' },
    { id: 15, userName: 'User15', diaryTitle: 'DiaryTitle15', isReceiptVerified: false, pinColor: 'PURPLE' }
  ];



  return (
    <div>
      <div className="header">
        <PostMainHeader/>
      </div>
      <dlv className="main">
        <div className="matzip-by-function">
        <Container maxWidth="xl">
          <Container className="main-container">    
            <Container className="weather-post-area">
              <div className="title-container">
                <p className="title">오늘 날씨에 딱 맞는 맛집 게시글</p>
              </div>
              <div className="overlap">
                <div className="weather-info">
                  <div className="horizontal-container">
                    <div className="weather-icon">
                      <img
                        src="/img/umbrella-icon.png"
                      />
                    </div>
                    <div>
                      <div className="temperature-1">16.5 °</div>
                      <div className="temperature-2">체감(16.5°)</div>
                    </div>
                  </div>
                  
                  <div className="temperature-3">어제보다 7° 낮아요</div>

                  <p className="weather-text">빗소리와 함께 하면 좋은 음식</p>

                  <div className="scrollArea">
                    <div className="scrollBar" />
                  </div>

                  <div className="button-area">
                    <img
                      className="button-previous"
                      alt="Button previous"
                      src="/img/button-previous-slide.png"
                    />

                    <img
                      className="button-next"
                      alt="Button next slide"
                      src="/img/button-next-slide.png"
                    />
                  </div>
                </div>

                {/* 슬라이드 배너 */}
                <div className="wrapper">
                  <div className="slide_container">
                      <ul
                          className="slide_wrapper"
                          onMouseEnter={onStop}
                          onMouseLeave={onRun}
                      >
                          <div
                              className={"slide original" + (
                                  animate ? "" : " stop"
                              )}
                          >
                              {teamImages.map((images, i) => (
                                  <li
                                      key={images.id}
                                  >
                                      <p className="item">
                                      <div className="post1">
                                        <div className="frame">
                                          <img src='/img/frame-195.png'/>
                                        </div>
                                      </div>
                                      </p>
                                  </li>
                              ))}
                          </div>
                          <div
                              className={"slide clone" + (animate ? "" : " stop")}
                          >
                              {teamImages.map((images, i) => (
                                  <li
                                      key={images.id}
                                  >
                                      <p className="item">
                                        <div className="post1">
                                          <div className="frame">
                                            <img src='/img/frame-195.png'/>
                                          </div>
                                        </div>
                                      </p>
                                  </li>
                              ))}
                          </div>
                      </ul>
                  </div>
                </div>
              </div>
            </Container>

            <Container className="feeling-post-area">
              <div className="title-container">
                <p className="title">맛따라 기분따라</p>
              </div>
              <Container className="feeling-btn-container">
                <div className={`label-1 ${activeLabels.includes('label1') ? 'active' : ''}`} onClick={() => handleLabelClick('label1')}>
                  <div className="overlap-level-2">
                    <div className="feeling-text">평온</div>
                    <img
                      className="feeling-img"
                      alt="Smiling face with"
                      src="/img/fine.png"
                    />
                  </div>
                </div>

                <div className={`label-2 ${activeLabels.includes('label2') ? 'active' : ''}`} onClick={() => handleLabelClick('label2')}>
                  <div className="overlap-level-2">
                    <div className="feeling-text">행복</div>

                    <img
                      className="feeling-img"
                      alt="Smiling face with"
                      src="/img/smiley.png"
                    />
                  </div>
                </div>

                <div className={`label-3 ${activeLabels.includes('label3') ? 'active' : ''}`} onClick={() => handleLabelClick('label3')}>
                  <div className="overlap-level-2">
                    <div className="feeling-text">사랑</div>
                    <img
                      className="feeling-img"
                      alt="Smiling face with"
                      src="/img/smiling-face-with-3-hearts.png"
                    />
                  </div>
                </div>

                <div className={`label-4 ${activeLabels.includes('label4') ? 'active' : ''}`} onClick={() => handleLabelClick('label4')}>
                  <div className="overlap-level-3">
                    <div className="feeling-text">호기심</div>
                    <img
                        className="feeling-img"
                        alt="Face with monocle"
                        src="/img/face-with-monocle.png"
                      />
                  </div>
                </div>

                <div className={`label-5 ${activeLabels.includes('label5') ? 'active' : ''}`} onClick={() => handleLabelClick('label5')}>
                  <div className="overlap-level-4">
                    <div className="feeling-text">스트레스</div>

                    <img
                      className="feeling-img"
                      alt="Background"
                      src="/img/background.svg"
                    />
                  </div>
                </div>

                <div className={`label-6 ${activeLabels.includes('label6') ? 'active' : ''}`} onClick={() => handleLabelClick('label6')}>
                  <div className="overlap-level-3">
                    <div className="feeling-text">귀찮음</div>
                    <div className="background-3" />

                      <img
                        className="feeling-img"
                        alt="Expressionless"
                        src="/img/expressionless.png"
                      />
                  </div>
                </div>

              </Container>

              <div className="feeling-post-list">
                <PostList data={testData}/>
              </div>
            
            </Container>


            <Container className="top-post-area">
            <div className="title-container" style={{ marginBottom: "50px"}}>
              <div className="title">
                Today’s <br />
                Top Reading
              </div>
            </div>
              <Grid container spacing={2}>
                <Grid item xs={12}  md = {12} lg={6}>
                <div className="top-reading-item-1">
                  <div className="horizontal-container">
                    <div className="user-name">UserName</div>
                    <div className="price">2000AMC</div>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Post Title </span>
                    <span className="post-reading-title-2">(게시글 제목)</span>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Reading Title </span>
                    <span className="post-reading-title-2">(열람 제목)</span>
                  </div>
                  <div className="reading-count">Reading Cnt</div>
                </div>
                </Grid>
                <Grid item xs={12}  md = {12} lg={6}>
                <div className="top-reading-item-1">
                  <div className="horizontal-container">
                    <div className="user-name">UserName</div>
                    <div className="price">2000AMC</div>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Post Title </span>
                    <span className="post-reading-title-2">(게시글 제목)</span>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Reading Title </span>
                    <span className="post-reading-title-2">(열람 제목)</span>
                  </div>
                  <div className="reading-count">Reading Cnt</div>
                </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}  md = {12} lg={6}>
                <div className="top-reading-item-2">
                  <div className="horizontal-container">
                    <div className="user-name">UserName</div>
                    <div className="price">2000AMC</div>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Post Title </span>
                    <span className="post-reading-title-2">(게시글 제목)</span>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Reading Title </span>
                    <span className="post-reading-title-2">(열람 제목)</span>
                  </div>
                  <div className="reading-count">Reading Cnt</div>
                </div>
                </Grid>
                <Grid item  xs={12}  md = {12} lg={6}>
                <div className="top-reading-item-2">
                  <div className="horizontal-container">
                    <div className="user-name">UserName</div>
                    <div className="price">2000AMC</div>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Post Title </span>
                    <span className="post-reading-title-2">(게시글 제목)</span>
                  </div>
                  <div className="horizontal-container">
                    <span className="post-reading-title-1">Reading Title </span>
                    <span className="post-reading-title-2">(열람 제목)</span>
                  </div>
                  <div className="reading-count">Reading Cnt</div>
                </div>
                </Grid>
              </Grid>

              
            </Container>

            <Container className="writing-contents-area">
              <Grid container spacing={2}>
                <Grid item xs={12}  md = {12} lg={6}>
                  <div className="writing-item-1">
                    <div className="writing-title">열람용 게시글 작성</div>
                      <p className="writing-text">
                        나만의 SECRET 맛집 게시글을 작성해보세요
                      </p>
                      <img
                        className="arrow-button"
                        alt="Details"
                        src="/img/details-1.svg"
                      />
                  
                  </div>
                </Grid>
                <Grid item xs={12}  md = {12} lg={6}>
                  <div className="writing-item-2">
                    <div className="writing-title">캘린더</div>
                      <p className="writing-text">
                        나만의 먹방 스케줄러를 작성해보세요
                      </p>
                      <img
                        className="arrow-button"
                        alt="Details"
                        src="/img/details-1.svg"
                      />
                
                  </div>
                </Grid>
              </Grid>
            </Container>

            <div className="empty-area"/>
          </Container>
        </Container>
      </div>
      </dlv>
      <div className="footer">
        <PostFooter/>
      </div>
    </div>
    
  );
};
