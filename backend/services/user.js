const { User } = require('../models');

exports.createUser = async function(query) {
    return await User.create(query)
}

exports.getUser = async function(query) {
    return await User.findOne(query)
}
