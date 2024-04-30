
let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$lXJEihhFxQ6f7O.myu5wmeTrPYS/hj5YF8SUKzTmCIWf5vQaHUCl6',  // abcd1234
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://cdn.pointe.co.kr/news/photo/202110/4299_11148_437.jpg'
        },
    {
        id: '2',
        username: 'banana',
        password: '2222',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://cdn.pointe.co.kr/news/photo/202110/4299_11148_437.jpg'
    }
];

export async function createUser(username, password, name, email) {
    const user = {
        id: '10',
        username,
        password,
        name,
        email,
        url: 'https://cdn.pointe.co.kr/news/photo/202110/4299_11148_437.jpg'
    }
    users = [user, ...users]
    return users;
}

export async function login(username) {
    const user = users.find((user) => user.username ===username)
    return user;
}