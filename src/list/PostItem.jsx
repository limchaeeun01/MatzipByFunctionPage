import { useEffect } from 'react';
import '../pages/css/style2.css'

function PostItem({ data }) {

    useEffect(() => {
       
    }, [data]); 

    return (
        <div className="post-item">
            <div className="image-container">
                <div className="image-background">
                    <div className="pin-color">
                        <div className="pin-color-text">RED PIN</div>
                    </div>
                    <div className="image-text">User Post Img</div>
                </div>
            </div>
            <div className="user-name-2">{data.userName}</div>
            <div className="diary-title">{data.diaryTitle}</div>
            <div className="privacy">공개 게시글</div>
            <div className="receipt">영수증 인증 완료 게시글</div>
        </div>
    );
}

export default PostItem;
