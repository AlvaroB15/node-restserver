const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();

        //Rutas del servidor
        this.routes();
    }

    routes() {

        this.app.use(this.usersPath, require('../routes/user'));

    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // Parseo y lectura de body en formato JSON
        this.app.use(express.json())

        // Directorio publico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`This server is runing in port ${this.port}`);
        });
    }

}

module.exports = Server;