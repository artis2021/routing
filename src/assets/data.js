import arti from './arti.jpeg'
import abhi from './abhi.jpg'
const members = [
    {
        userId: "arti",
        name: "Arti Sahu",
        nickname: "Cutu...",
        age: 20,
        weight: 40,
        height: 157,
        photo: arti
    },
    {
        userId: "abhi",
        name: "Abhishek",
        nickname: "Handsome",
        age: 23,
        weight: 60,
        height: 170,
        photo: abhi
    },
]

function getMemberById(userId){
    for(let member of members)
    {
        if(member.userId === userId) return member
    }
    return undefined
}

export default getMemberById
export {members}