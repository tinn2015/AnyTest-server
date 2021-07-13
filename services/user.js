const mongoose = require('mongoose')

const User = require('../models/index').getModel('user')
console.log('db User', User)

const user = {
    /**
     * @Description: 登录
     * @date 2019/5/30
     * @params: { Object } userData
     * @return: { Object | null }
     */
    async login (userData) {
        console.log('dblogin', userData, User)
        return await User.findOne(userData)
    },

    async register (userData) {
        return new Promise((resolve, reject) => {
            // var ObjectId = mongoose.Types.ObjectId;
            // var id = new ObjectId;
            // console.log('id', id)
            new User({username: userData.username, password: userData.password}).save().then((res, len, err) => {
                console.log('save', res, len, err)
                if (err) {
                    reject(err)
                } else {
                    resolve({type: 'success', data: res})
                }
            })
        })
    }
}

module.exports = user


