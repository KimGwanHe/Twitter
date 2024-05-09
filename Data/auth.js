import MongoDB, { ObjectId } from 'mongodb';
import { getUsers } from '../db/database.js';
import { Result } from 'express-validator';

const ObjectID = MongoDB.ObjectId;


// 아이디(username) 중복검사
export async function findByUsername(username){
    return getUsers().find({username}).next().then(mapOptionalUser);
}

// id 중복검사
export async function findById(id){
    return getUsers().find({_id: new ObjectID(id)}).next().then(mapOptionalUser);
}

// 회원가입
export async function createUser(user){
    return getUsers().insertOne(user).then((Result) => console.log(Result.insertedId.toString()));
}

// export async function login(username){
//     const user = users.find((user) => user.username === username)
//     return user;
// }

function mapOptionalUser(user){
    return user ? { ...user, id: user._id.toString() }: user;
}