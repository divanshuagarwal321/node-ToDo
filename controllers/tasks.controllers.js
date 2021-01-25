const tasks = require('../data/tasks.data')
const users = require('../data/users.data')

// @@api http://localhost:3000/tasks/add
const add = (req, res) => {

    res.status(200).json(
        tasks.add()
    )
}

// @@api http://localhost:3000/tasks/list
const list = (req, res) => {
    res.status(200).json(
       tasks.tasks
    )  
}

// @@api http://localhost:3000/tasks/markComplete
const markComplete = (req, res) => {
    res.status(200).json(
        tasks.markComplete(users.randomNumber(0, tasks.tasks.length-1))
    )
}


// @@api http://localhost:3000/tasks/update
const update = (req, res) => {
        let arrIndex = Math.floor(Math.random() * tasks.tasks.length)
        let x = tasks.newObj()
        let y = {
            ...x,
            id: tasks.tasks[arrIndex].id,
            userId: tasks.tasks[arrIndex].userId
        }
        tasks.tasks[arrIndex] = x
        let z = {
            index: arrIndex,
            "updated array": x
        }
        res.status(200).json(z)
}

// @@api http://localhost:3000/tasks/describe
const describe = (req, res) => {
    res.status(200).json(
        tasks.describe(users.randomNumber(0, tasks.tasks.length-1))
    )
}

// @@api http://localhost:3000/tasks/delete
const deleted = (req, res) => {
    let x = users.randomNumber(0, tasks.tasks.length-1)
    res.status(200).json({
        delete: tasks.tasks[x]
    })
    tasks.tasks.splice(x, 1)
}


// @@api http://localhost:3000/tasks/listOnlyRemaining
const listOnlyRemaining = (req, res) => {
    res.status(200).json(
        tasks.listOnlyRemaining()
    )
}


module.exports = {
    add: add,
    list: list,
    markComplete,
    update,
    describe,
    delete: deleted,
    listOnlyRemaining
}