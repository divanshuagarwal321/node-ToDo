const admin= require('../data/admin.data')

const auth = (req, res, next) => {
   //aim: random token-->decode-->assign admin(req.admin), if then next()
}

module.exports = {
   auth
}