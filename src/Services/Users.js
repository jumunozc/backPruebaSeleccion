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

async function deleteUser(id) {
    try {
        let retrieved = await UserModel.deleteOne({ Email: id })
        return { retrieved }
    } catch (error) {
        return { error }
    }

}


async function getnotAdmins() {
    try {
        let retrieved = await UserModel.find({ Role: 2 })
        return { retrieved }
    } catch (error) {
        return { error }
    }

}

async function updateUser(data) {

    try {
        let retrieved = await UserModel.updateOne({ Email: data.email },
            {
                Names: data.name,
                Surnames: data.surname,
                Phone: data.phone
            })
        return { retrieved }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

module.exports = {
    getUserData,
    getnotAdmins,
    deleteUser,
    updateUser
}