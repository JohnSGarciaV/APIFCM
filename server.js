import Express from 'express';
import Cors from 'cors';
import { conectarBD } from './db/conn.js';
import dotenv from 'dotenv';
import rutasVoluntario from './rutes/voluntarios.js';
import rutasActividadesV from './rutes/actividadesv.js';
import rutasActividadesF from './rutes/actividadesf.js';
import rutasSales from './rutes/ventas.js';

dotenv.config({ path: './config.env'});

const puerto = process.env.PORT || 5000;
const app = Express();

app.use(Express.json());
app.use(Cors());

app.use(rutasVoluntario);
app.use(rutasActividadesV);
app.use(rutasActividadesF);
app.use(rutasSales);

const main = () => {
    return app.listen(puerto, () => {
        console.log(`Escuchando puert ${puerto}`);
    });
};

conectarBD(main);