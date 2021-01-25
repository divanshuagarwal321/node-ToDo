const users = require("../data/users.data");

const auth = (req, res, next) => {
   //aim:
   //1. find the token at the index from tokens array
   let token = tokens[index]
   //console.log(token)
   //2. decode that token. Take id from it 
   let decoded = jwt.verify(token, 'key');
   let id = decoded.id
   console.log(id) //auth.js m daalna h
   //3. find the user which has id same as the obtained id
   // for (let i = 0; i < users.length; ++i) {
   //    if (id === users[i].id) {
   //       req.user = users[i]
   //       next()
   //       return
   //    }
   // }
   let user= users.findUser(id)
   req.user = user
   return user.id ? next() : res.send('user not found')
   
  // return
   //4. return the matched user info


   // console.log("1end")

}

const middleware2 = (req, res, next) => {
   // console.log("2")
   next()
   // console.log("2end")

}

module.exports = {
   auth,
   middleware2: middleware2
}