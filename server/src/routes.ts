import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
	response.json({ mg: 'Hello World' });
});

export default routes;