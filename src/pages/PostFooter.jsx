import "./css/footer.css";

function PostFooter () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerlist">
                    <div className="footer-text-4letters">
                        매체소개
                    </div>
                    <div className="footer-text-4letters">
                        고객센터
                    </div>
                    <div className="footer-text-5letters">
                        포인트정책
                    </div>
                    <div className="footer-text-8letters">
                        개인정보처리방침
                    </div>
                    <div className="footer-text-4letters">
                        이용약관
                    </div>
                    <div className="footer-text-9letters">
                        이메일무단수집금지
                    </div>
                    <div className="footer-text-7letters">
                        광고·제휴문의
                    </div>
                    <div className="footer-text-4letters">
                        윤리경영
                    </div>
                </div>
                <div className="footerimage">
                    <img className="img" alt="List" src="/img/list.svg" />
                </div>
            </div>
      </footer>
    )
}

export default PostFooter;