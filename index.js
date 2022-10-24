const dbHelper = require('./src/db/connection');
const express = require('express');
const app = express();
const config = require('./src/config');
const env = config.NODE_ENV;
const PORT = config.PORT;
const routerPath = require('./src/routes');
const { jsonS } = require('./src/utils');

dbHelper.load();

const initMiddlewares = () => {
	app.use(cors());
	app.use(fileUpload({
		createParentPath: true
	}))
	app.options('*', cors());
};

const initRoutes = () => {

    app.use('/v1', routerPath);

    app.all('**', (req, res) => {
		return jsonFailed(res, 404, 'route not found', null);
	});

    app.get('/', (req, res) => {
        return jsonS(res, 200, 'Welcome to Summitech Test', {});
    })
};

const build = async() => {
    initMiddlewares();
    initRoutes();

    const server = app.listen(PORT, async () => {
        const port = server.address.port;
        console.log(`Server listening at PORT ${port} and on ${env} mode`);
    });
};
build();