// @@api http://localhost:3000/admin/add
const add = (req, res) => {
    res.status(200).json({
        add: "add"
    })
}

// @@api http://localhost:3000/admin/list
const list = (req, res) => {
    res.status(200).json({
        list: "list"
    })
}

// @@api http://localhost:3000/admin/delete
const deleted = (req, res) => {                       
    res.status(200).json({
        delete: "delete"
    })
}

// @@api http://localhost:3000/admin/showAllData
const showAllData = (req, res) => {
    res.status(200).json({
        showAllData: "showAllData"
    })
}


// @@api http://localhost:3000/admin/describeUserData
const describeUserData = (req, res) => {
    res.status(200).json({
        describeUserData: "describeUserData"
    })
}

// @@api http://localhost:3000/admin/describeTask
const describeTask = (req, res) => {
    res.status(200).json({
        describeTask: "describeTask"
    })
}


module.exports = {
    add: add,
    list: list,
    delete : deleted,
    showAllData,
    describeUserData,
    describeTask,
    
}