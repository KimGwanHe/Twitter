import express from "express";

const router = express.Router();

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

// 해당 아이디에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter((tweet) => tweet.username == username) : tweets;
    res.status(200).json(data);
});

//글 번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets?:id
router.get('/:id', (req, res,next) => {
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 트읫이 없습니다`});
    }
});


// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text를 받아서 글 입력할 수 있게
// json 형태로 입력 후 추가된 데이터까지 모두 출력 json으로 출력
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = {
        id: '10',
        text: text,
        createdAt: Date.now().toString(),
        name: name,
        username: username,
        url: 'https://cdn.pointe.co.kr/news/photo/202110/4299_11148_437.jpg'
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweets);
});


// 트윗 수정하기
// PUT
// http://localhost:8080/tweets?:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(201).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 트읫이 없습니다`});
    }
});


// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets?:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id !== id);
    res.sendStatus(204);
});

export default router;
