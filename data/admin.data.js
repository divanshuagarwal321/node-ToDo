const bcrypt = require('bcrypt')
const admins = []


const findOrCreate = (email, password) => {
    found = false
    // aim: find in admin array an object that has email id===email. if available match password. if not, create one.
    for (let i of admins) {
        if (email === i.email) {
            found = true
            if (bcrypt.compareSync(password, i.password))
                return
            else
                console.log('password didn\'t match')
        } 
    }
    if (!found)
        admins.push({
            id: admins.length,
            email,
            password: bcrypt.hashSync(password, 0),
        })

    console.log(admins)

}


module.exports = {
    findOrCreate,
}
