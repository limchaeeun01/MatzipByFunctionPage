import { useEffect } from 'react';
import '../pages/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

function PostItem({ data }) {

    useEffect(() => {
       
    }, [data]); 

    // pinColor에 따라 색상 설정
    const getPinColorStyle = (color) => {
        switch (color) {
            case 'RED':
                return '#F40159';
            case 'BLUE':
                return '#50B1F9';
            case 'PURPLE':
                return '#A11EFF';
            case 'YELLOW':
                return '#FFDD31';
            default:
                return 'black'; // 기본 색상
        }
    };

    return (
        <div className="post-item">
            <div className="image-container">
                <div className="image-background">
                    <div className="pin-color" style={{ backgroundColor: getPinColorStyle(data.pinColor) }}>
                        <div className="pin-color-text">{data.pinColor} PIN</div>
                    </div>
                    <div className="image-text">User Post Img</div>
                </div>
            </div>
            <div className="post-info">
                <div className="user-name-2">{data.userName}</div>
                <div className="diary-title">{data.diaryTitle}</div>
                
                <div className="hashtag">#해시태그</div>

                <div className="receipt-mark"
                     style={{ color: data.isReceiptVerified ? "#00B058" : "black" }}>
                    {data.isReceiptVerified ? "영수증 인증 게시글" : "영수증 미인증 게시글"}
                    {data.isReceiptVerified && <FontAwesomeIcon className="check-icon" icon={faCheckDouble} />}
                </div>
            </div>
        </div>
    );
}

export default PostItem;
