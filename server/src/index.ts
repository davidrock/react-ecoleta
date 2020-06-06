import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
app.use(express.json());
app.use(routes);


app.listen(3333);
