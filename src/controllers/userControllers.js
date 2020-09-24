const fs = require('fs');

const readUser = () => {
    const content = fs.readFileSync('./src/models/user.json', 'utf-8');
    return JSON.parse(content);
};

const writeUser = (content) => {
    const updateFile = JSON.stringify(content);
    fs.writeFileSync('./src//models/user.json', updateFile, 'utf-8');
};

module.exports = {
    async create(req, res) {
        const { nome, email, genero } = req.body;

        const readingUser = readUser();

        const selectConflict = await readingUser.findIndex(
            (position) => position.nome === nome || position.email === email
        );
        try {
            if (readingUser[selectConflict]) {
                return res
                    .status(409)
                    .send({ Error: 'Name or Email already exist.' });
            }

            const id = Math.random().toString(32).substr(2, 9);

            readingUser.push({ id, nome, email, genero });

            writeUser(readingUser);

            return res.status(201).send({ id, nome, email, genero });
        } catch (err) {
            res.status(404).send(err, 'Not created');
        }
        return res;
    },
};
