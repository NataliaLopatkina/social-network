const crypto = require('crypto');
const userService = require('../services/user');

exports.registration = async function (req, res, next) {
    const { firstName, lastName, email, password, dayBirth, monthBirth, yearBirth } = req.body;
    const birthday = dayBirth + ' ' + monthBirth + ' ' + yearBirth;
    const hash = crypto.createHash('md5').update(password).digest("hex");

    try {
        const user = await userService.getUser({ where: { email: email } });

        if (!user) {
            await userService.createUser({ firstName, lastName, email, password: hash, birthday });
            return res.status(201).json({ message: 'Пользователь зарегистрирован.'})
        }

        throw new Error('Почта уже используется другим аккаунтом. Вы можете использовать вход.')
    }

    catch (e) {
        return res.status(403).json({ message: e.message })
    }
}
