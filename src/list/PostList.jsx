import PostItem from "./PostItem";
import '../pages/css/style2.css'

function PostList() {
    // 12개의 테스트 데이터 생성
    const testData = [
        { id: 1, userName: 'User1', diaryTitle: 'DiaryTitle1' },
        { id: 2, userName: 'User2', diaryTitle: 'DiaryTitle2' },
        { id: 3, userName: 'User3', diaryTitle: 'DiaryTitle3' },
        { id: 4, userName: 'User4', diaryTitle: 'DiaryTitle4' },
        { id: 5, userName: 'User5', diaryTitle: 'DiaryTitle5' },
        { id: 6, userName: 'User6', diaryTitle: 'DiaryTitle6' },
        { id: 7, userName: 'User7', diaryTitle: 'DiaryTitle7' },
        { id: 8, userName: 'User8', diaryTitle: 'DiaryTitle8' },
        { id: 9, userName: 'User9', diaryTitle: 'DiaryTitle9' },
        { id: 10, userName: 'User10', diaryTitle: 'DiaryTitle10' },
    ];

    return (
        <div className="post-list">
            {testData.map((item) => (
                <PostItem key={item.id} data={item} />
            ))}
        </div>
    );
}

export default PostList;
