import { useEffect } from 'react';
import '../pages/style2.css'

function PostItem({ data }) {

    useEffect(() => {
       
    }, [data]); 

    return (
        <div className="post-item">
            <div className="container-4">
                <div className="overlap-group-4">
                    <div className="background-4">
                        <div className="text-wrapper-10">RED PIN</div>
                    </div>
                    <div className="text-wrapper-11">User Post Img</div>
                </div>
            </div>
            <div className="text-wrapper-8">{data.userName}</div>
            <div className="text-wrapper-9">{data.diaryTitle}</div>
            <div className="details">공개 게시글</div>
            <div className="details-2">영수증 인증 완료 게시글</div>
        </div>
    );
}

export default PostItem;
