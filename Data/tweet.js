import { groupEnd } from "console";

let tweets = [
    {
        id: '1',
        text: '안녕하세요!',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://marketplace.canva.com/print-mockup/bundle/E9yQ-lP6dAx/size:product-size-small,surface:marketplace/surface:marketplace/EAF-4CoPl1Q/1/0/1600w/canva-%EA%B9%94%EB%81%94%ED%95%9C-%EB%B9%A8%EA%B0%84%EC%83%89-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%ED%99%88%EB%A9%94%EC%9D%B4%EB%93%9C-%EC%82%AC%EA%B3%BC-%EC%A9%80-%EC%9B%90%ED%98%95-%EC%8A%A4%ED%8B%B0%EC%BB%A4-hFLoIFwNS3w.jpg?sig=80e3690f94cb330f0c62f5b4b73f819c&width=800'
    },
    {
        id: '2',
        text: '반갑습니다!',
        createdAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: 'https://cdn.pointe.co.kr/news/photo/202110/4299_11148_437.jpg'
    }
];

// 모든 트윗을 리턴
export async function getAll() {
    return tweets;
}

// 해당 아이디에 대한 트윗을 리턴
export async function getAllbyUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

// 글번호에 대한 트윗을 리턴
export async function getbyId(id) {
    return tweets.find((tweet) => tweet.id === id);
}

// 트윗을 작성
export async function create(text, name, username) {
    const tweet = {
        id: '10',
        text,
        createdAt: Date.now().toString(),
        name,  // name: name
        username  // username: username
    };
    tweets = [tweet, ...tweets];
    return tweets;
}

// 트윗을 변경
export async function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet){
        tweet.text = text;
    }
    return tweet;
}

// 트위을 삭제
export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
}