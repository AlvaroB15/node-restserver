const { response } = require('express');

const usersGet = (req, res = response) => {

    const { q, nombre = 'Not name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'GET API',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPost = (req, res) => {

    const { name, edad } = req.body;

    res.json({
        msg: 'POST API',
        name, edad
    });
}

const usersPut = (req, res) => {

    const idUser = req.params.idUser;

    res.json({
        msg: 'PUT API',
        idUser
    });
};

const usersPatch = (req, res) => {
    res.json({
        msg: 'PATCH API'
    });
};

const usersDelete = (req, res) => {
    res.json({
        msg: 'DELETE API'
    });
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
};