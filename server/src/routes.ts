import express from 'express';
import knex from './database/connection';

const routes = express.Router();

// routes.get('/', (request, response) => {
// 	response.json({ mg: 'Hello World' });
// });

routes.get('/items', async (request, response) => {
	const items = await knex('items').select('*');

	items.map(
		(x) => (x.image = `http://localhost:3333/uploads/${x.image}`)
	);

	response.json(items);
});

routes.post('/points', async (request, response) => {
	const trx = await knex.transaction();
	const {
		name,
		email,
		whatsapp,
		latitude,
		longitude,
		city,
		uf,
		items,
	} = request.body;

	const insertedIds = await trx('points').insert({
		name,
		email,
		image: 'image-fale',
		whatsapp,
		latitude,
		longitude,
		city,
		uf
		// items,
	});

	const pointItems = items.map((item_id: number)=> {
		return {
			item_id,
			point_id: insertedIds[0]
		}
	});

	await trx(`point_items`).insert(pointItems);

	return response.json({ success: true });
});

export default routes;
