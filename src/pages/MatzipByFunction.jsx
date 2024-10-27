import React, { useState, useEffect } from "react";
import "./css/style.css";
import PostList from "../list/PostList";

import { Pagination, Container, Grid } from '@mui/material';

export const MatzipByFunction = () => {
  /* 무한 롤링 배너 */
  const teamImages = [
    { id: 1, name: 'Smiley 1', src: '../../public/img/smiley.png' },
    { id: 2, name: 'Smiley 2', src: '../../public/img/smiley.png' },
    { id: 3, name: 'Smiley 3', src: '../../public/img/smiley.png' },
    { id: 1, name: 'Smiley 1', src: '../../public/img/smiley.png' },
    { id: 2, name: 'Smiley 2', src: '../../public/img/smiley.png' },
  ];

  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  /* 페이지네이션 */
  const [activePage, setActivePage] = useState(1); // 기본 활성화된 페이지 1로 설정

  const handlePageClick = (pageNum) => {
    setActivePage(pageNum);
  };

  /* 감정 버튼 */
  const [activeLabels, setActiveLabels] = useState([]);

  const handleLabelClick = (label) => {
    if (activeLabels.includes(label)) {
      setActiveLabels(activeLabels.filter((item) => item !== label));
    } else {
      setActiveLabels([...activeLabels, label]);
    }
  };


  return (
    <div className="matzip-by-function">
      <Container maxWidth="xl">
        <Container className="main-container">    
          <Container className="weather-post-area">
            <div className="title-container">
              <p className="title">오늘 날씨에 딱 맞는 맛집 게시글</p>
            </div>
            <div className="overlap">
              <div className="weather-info">
                <div className="temperature-1">16.5 °</div>
                <div className="temperature-2">체감(16.5°)</div>
                <div className="temperature-3">어제보다 7° 낮아요</div>

                <p className="weather-text">빗소리와 함께 하면 <br />좋은 음식</p>

                <div className="scrollArea">
                  <div className="scrollBar" />
                </div>

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

                <div className="weather-icon">
                  <img
                    src="/img/umbrella-icon.png"
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
              <PostList/>
            </div>

            <div className="pagination-area">
              <Pagination count={10} />
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
  );
};
