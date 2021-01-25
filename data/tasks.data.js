const data = require('../config/development')
const users = require('./users.data')
const tasks = []

// const ranNum1 = users.randomNumber()
// const ranNum = () => {     
//     users.randomNumber()
// }

const newObj = () => {
    const random = users.randomNumber(0, users.users.length - 1)
    let obj = {
        createAt: Date.now(), //
        id: tasks.length * 5,
        userId: users.users[random].id,
        toDo: data.aim.toDo[users.randomNumber(0, 19)],
        completed: false
    }
    return obj
}

const add = () => {
    const random = users.randomNumber(0, users.users.length - 1)
    //console.log(users.users.length)
    tasks.push(newObj())
    //console.log(tasks)
    return tasks[tasks.length - 1] 
}

const markComplete = (index) => {
    // console.log(tasks[index])
    tasks[index].completed = true
    return (tasks[index])
}


const listOnlyRemaining = () => {
    let remaining = []
    for (let i = 0; i < tasks.length; ++i) {
        if (tasks[i].completed === false) {
            remaining.push(tasks[i])
        }
    }
    return remaining
}

const describe = (index) => {
    // console.log(tasks[value])
    let task = tasks[index]
    let user = users.findUser(task.userId)
    return {
        ...task,
        user
    }
}

module.exports = {
    tasks,
    add,
    markComplete,
    listOnlyRemaining,
    describe,
    newObj
}