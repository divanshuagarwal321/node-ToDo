const bcrypt = require('bcrypt')
const data = require('../config/development')
const jwt = require('jsonwebtoken');
const users = []
const tokens=[]

function randomNumber(min, max) {
    //console.log(users)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const newObj = () => {
    const hash = bcrypt.hashSync(data.info.password[randomNumber(0, 19)], 0)
    let obj = {
        id: users.length * 3,
        age: randomNumber(18, 35),
        name: data.info.name[randomNumber(0, 19)],
        password: hash,
        emailId: data.info.emailId[randomNumber(0, 19)]
    }
    let token = jwt.sign({
        id : obj.id,
        iat : new Date().getTime()
    }, 'key')
    tokens.push(token)
    obj.token = token 
    return obj
}

const add = () => {
    let obj= newObj()
    let user = Object.assign({}, obj)
    delete obj.token
    users.push(obj)
    //console.log(tokens)
    return user
}

const findUser = (id) => {
//   //aim:
//   //1. find the token at the index from tokens array
//   let token= tokens[index]
//   //console.log(token)
//   //2. decode that token. Take id from it 
//   let decoded = jwt.verify(token, 'key');
//   let id= decoded.id
//   console.log(id)
  //3. find the user which has id same as the obtained id
  for(let i=0; i<users.length; ++i){
      if(id===users[i].id){
          return users[i]
      }
  }
  return {}
  //4. return the matched user info
    //return users[index]

}       
const len = () => {
    return (users.length)
}

module.exports = {
    add,
    users,
    newObj,
    randomNumber,
    findUser,
    len
}