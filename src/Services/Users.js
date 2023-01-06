require('dotenv').config();
const UserModel = require('../Models/UserModel')

async function getUserData(id) {
    try {
        let retrieved = await UserModel.findOne({ Email: id })
        return { retrieved }
    } catch (error) {
        return { error }
    }

}

module.exports = {
    getUserData
}