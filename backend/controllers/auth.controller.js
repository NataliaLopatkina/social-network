const crypto = require('crypto');
const userService = require('../services/user');
const jwt = require('jsonwebtoken');

exports.registration = async function (req, res, next) {
    const { firstName, lastName, email, password, dayBirth, monthBirth, yearBirth } = req.body;
    const birthday = dayBirth + ' ' + monthBirth + ' ' + yearBirth;
    const hash = crypto.createHash('md5').update(password).digest("hex");

    try {
        const user = await userService.getUser({ where: { email: email } });

        if (!user) {
            await userService.createUser({ firstName, lastName, email, password: hash, birthday });
            const data = { name: firstName, lastName: lastName, email: email };
            const token = jwt.sign(data, 'secretToken', {expiresIn: 60*60});
            return res.status(201).json({ message: 'Пользователь зарегистрирован.', token, user})
        }

        throw new Error('Почта уже используется другим аккаунтом. Вы можете использовать вход.')
    }

    catch (e) {
        return res.status(403).json({ message: e.message })
    }
}

exports.login = async function(req, res, next) {
    const { email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest("hex");

    try {
        const user = await userService.getUser({ where: { email: email, password:  hash}});

        if (user) {
            const data = { name: user.firstName, lastName: user.lastName, email: user.email };
            const token = jwt.sign(data, 'secretToken', { expiresIn: 60 * 60 })
            return res.status(200).json({ message: 'Пользователь найден!', token, user })
        }

        throw new Error('Некорректный логин или пароль!')
    }

    catch(e) {
        return res.status(404).json({ message: e.message })
    }
}

exports.getUser = async function(req, res, next) {
    const { email } = req.body;

    try {
        const user = await userService.getUser({ where: { email: email } })

        if(user) {
            return res.status(200).json({ user })
        }

        throw new Error('Пользователь не найден!')
    }

    catch(e) {
        return res.status(400).json({message: e.message})
    }
}
