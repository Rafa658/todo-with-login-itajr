const mongoose = require('mongoose')
const user = require('../models/User')

const User = mongoose.model('User', user)

class UserService {
    async Create(email, password) {
        var newUser = new User({ email, password })

        try {
            await newUser.save()
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async Find(email, password) {
        try {
            var result = await User.find({ email, password })
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

}

module.exports = new UserService()