import React, { useState } from "react";
import { LinearEssentional } from "../components/LinearEssentional";
import "./style2.css";
import PostList from "../list/PostList";



export const MatzipByFunction2 = () => {
  const teamImages = [
    { id: 1, name: 'Smiley 1', src: '../../public/img/smiley.png' },
    { id: 2, name: 'Smiley 2', src: '../../public/img/smiley.png' },
    { id: 3, name: 'Smiley 3', src: '../../public/img/smiley.png' },
    // 추가 이미지 객체
  ];

  // 애니메이션 제어 할 상태 변수
  const [animate, setAnimate] = useState(true);
  // 마우스가 슬라이더 진입 시 호출, false값으로 애니메이션 중지
  const onStop = () => setAnimate(false);
  // 마우스가 슬라이더 떠날 때 호출, true값으로 애니메이션 재시작
  const onRun = () => setAnimate(true);

  const [activePage, setActivePage] = useState(1); // 기본 활성화된 페이지 1로 설정

  const handlePageClick = (pageNum) => {
    setActivePage(pageNum);
  };

  return (
    <div className="matzip-by-function">
      <div className="container">
        <div className="title-container">
          <p className="title">오늘 날씨에 딱 맞는 맛집 게시글</p>
        </div>
        <div className="weather-post-area">
          <div className="overlap">
            <div className="weather-info">
              <div className="temperature-1">16.5 °C</div>
              <div className="temperature-2">체감(16.5°C)</div>
              <div className="temperature-3">어제보다 7°C 낮아요</div>

              <p className="weather-text">비 소리와 함께 하면 좋은 음식</p>

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
                <LinearEssentional className="linear-essentional-UI-umbrella" />
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
        </div>

        <div className="title-container">
          <p className="title">맛따라 기분따라</p>
        </div>

        <div className="feeling-post-area">
          <div className="feeling-btn-container">
            <div className="label">
              <div className="item-link-wrapper">
                <div className="item-link">
                  <div className="text-wrapper-3">평온</div>
                </div>
              </div>
            </div>

            <div className="label-2">
              <div className="overlap-2">
                <div className="border">
                  <div className="overlap-group-3" />
                </div>

                <div className="item-link-6">
                  <div className="text-wrapper-3">행복</div>
                </div>
              </div>
            </div>

            <div className="label-3">
              <div className="overlap-2">
                <div className="item-link-2">
                  <div className="text-wrapper-3">사랑</div>
                </div>

                <img
                  className="img"
                  alt="Smiling face with"
                  src="/img/smiling-face-with-3-hearts.png"
                />
              </div>
            </div>

            <div className="label-4">
              <div className="overlap-3">
                <div className="item-link-3">
                  <div className="text-wrapper-3">호기심</div>
                </div>

                <div className="overlap-group-2">

                  <img
                    className="img-2"
                    alt="Face with monocle"
                    src="/img/face-with-monocle.png"
                  />
                </div>
              </div>
            </div>

            <div className="label-5">
              <div className="overlap-4">
                <div className="item-link-5">
                  <div className="text-wrapper-3">스트레스</div>
                </div>

                <img
                  className="img"
                  alt="Background"
                  src="/img/background.svg"
                />
              </div>
            </div>

            <div className="label-6">
              <div className="overlap-3">
                <div className="item-link-4">
                  <div className="text-wrapper-3">귀찮음</div>
                </div>

                <div className="overlap-group-2">
                  <div className="background-3" />

                  <img
                    className="img-2"
                    alt="Expressionless"
                    src="/img/expressionless.png"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="feeling-post-list">
            <PostList/>
          </div>

          <nav className="pagination-area">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {[1, 2, 3].map((pageNum) => (
                <li
                  key={pageNum}
                  className={`page-item ${activePage === pageNum ? "active" : ""}`}
                  onClick={() => handlePageClick(pageNum)}
                >
                  <a className="page-link" href="#">
                    {pageNum}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>

        <div className="title-container">
          <div className="title">
            Today’s <br />
            Top Reading
          </div>
        </div>

        <div className="top-post-area">
          <div className="list">
            <div className="top-reading-item-1">
              <div className="horizontal-container">
                <div className="user-name">UserName</div>
                <div className="price">2000AMC</div>
              </div>
              <div className="horizontal-container">
                <span className="post-reading-title">Post Title </span>
                <span className="text-wrapper-35">(게시글 제목)</span>
              </div>
              <div className="horizontal-container">
                <span className="post-reading-title">Reading Title </span>
                <span className="text-wrapper-35">(열람 제목)</span>
              </div>
              <div className="reading-count">Reading Cnt</div>
            </div>

            <div className="top-reading-item-2">
              <div className="details-15">UserName</div>

              <div className="details-16">2000AMC</div>

              <p className="term-KT-g-with-2">
                <span className="span">Post Title </span>

                <span className="text-wrapper-35">(게시글 제목)</span>
              </p>

              <p className="term-KT-g-with-3">
                <span className="span">Reading Title </span>

                <span className="text-wrapper-35">(열람 제목)</span>
              </p>

              <div className="details-17">Reading Cnt</div>
            </div>
          </div>

          <div className="list">
            <div className="top-reading-item-3">
              <div className="details-12">UserName</div>

              <div className="details-13">2000AMC</div>

              <p className="term-KT-g-with">
                <span className="span">Post Title </span>

                <span className="text-wrapper-35">(게시글 제목)</span>
              </p>

              <p className="p">
                <span className="span">Reading Title </span>

                <span className="text-wrapper-35">(열람 제목)</span>
              </p>

              <div className="details-14">Reading Cnt</div>
            </div>

            <div className="top-reading-item-4">
              <div className="details-12">UserName</div>

              <div className="details-13">2000AMC</div>

              <p className="term-KT-g-with">
                <span className="span">Post Title </span>

                <span className="text-wrapper-35">(게시글 제목)</span>
              </p>

              <p className="p">
                <span className="span">Reading Title </span>

                <span className="text-wrapper-35">(열람 제목)</span>
              </p>

              <div className="details-14">Reading Cnt</div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};
