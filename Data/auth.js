import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;  // 데이터 형을 가져와 저장해줌. int, string 같은 형태

export const User = sequelize.define(
    'user',  // 테이블명 ORM은 테이블명 만들면 무조건 s를 붙여옴.
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        url: DataTypes.STRING(1000)
    },
    { timestamps: false }
);

// 아이디(username) 중복검사
export async function findByUsername(username){
    return User.findOne({where: {username}});  // username하고 일치하는 애만 가져와. 한개만 찾음.
}

// id 중복검사
export async function findById(id){
    return User.findByPk(id);
}

// 회원가입
export async function createUser(user){
    return User.create(user).then((data) => data.dataValues.id);
}

export async function login(username){
    const user = users.find((user) => user.username === username)
    return user;
}