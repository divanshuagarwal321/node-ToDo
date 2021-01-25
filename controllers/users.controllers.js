const users = require('../data/users.data')
const tasks = require('../data/tasks.data')
const jwt = require('jsonwebtoken');

// @@api http://localhost:3000/users/
const homepage = (req, res) => {
    console.log(req.userId)
    res.status(200).send(
        "Welcome to Homepage"
    )
}

// @@api http://localhost:3000/users/signup
const signup = (req, res) => {
    res.status(200).json(
        users.add()
    )
}

// @@api http://localhost:3000/users/login
const login = (req, res) => {
    //aim: 
    //1. find the user with random index
    //let user = users.users[Math.floor(Math.random() * users.users.length)]
    let user= req.user
    //2. take this user id and make a token
    let token = jwt.sign({
        id: user.id,
        iat: new Date().getTime()
    }, 'key') //auth m daala h
    //3. add token property to the user object
    user.token = token
    //4. send to chrome
    res.status(200).json(user)
}

// @@api http://localhost:3000/users/list
const list = (req, res) => {
    res.status(200).json(
        users.users// user array nhi aana chahiye, fun() bana kr call kro users.data se
    )
}

// @@api http://localhost:3000/users/update
const update = (req, res) => {
    //let id= req.user.id
    //1.search user array for the id
    //2.update that object
    let arrIndex = Math.floor(Math.random() * users.users.length)
    let x = users.newObj()
    let y = {
        ...x,
        id: users.users[arrIndex].id
    }
    users.users[arrIndex] = y
    let updatedArray = {
        index: arrIndex,
        "updated array": y
    }
    res.status(200).json(updatedArray)
}

// @@api http://localhost:3000/users/describe
const describe = (req, res) => {
    //let user=req.user
    //let id=user.id
    //create fun(id) to find all task of this user(task.data.js)
    let userTasks = []
    let user = users.findUser(users.randomNumber(0, users.users.length - 1))
    for (let task of tasks.tasks) {
        if (task.userId === user.id) { //task.userId?
            userTasks.push(task)
        }
    }
    let userData = {
        ...user,
        userTasks
    }// keep it as it is
    res.status(200).json(userData)

}

// @@api http://localhost:3000/users/delete
const deleted = (req, res) => {
    let x = users.randomNumber(0, users.users.length - 1)
    res.status(200).json({
        delete: users.users[x]
    })
    users.users.splice(x, 1)
}


module.exports = {
    homepage: homepage,
    signup: signup,
    login,
    list,
    update,
    describe,
    delete: deleted,
}
//token 'key' --> 'verySecuredKey'