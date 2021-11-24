import  Express  from 'express';
import { queryAllActividadF, queryActividadF, createActividadF, editActividadF, deleteActividadF } from '../controllers/actividadesf/actividadesf.js';



const rutasActividadesF = Express.Router();

const genericCallback = (response) => (err, result) =>{
        if (err) {
          response.sendStatus(500).send(err.toString());
        } else {
            response.json(result)
        }
};


rutasActividadesF.route('/actividadesf').get((req, res) => {
  queryAllActividadF(genericCallback(res));
});

rutasActividadesF.route('/actividadf/:id').get((req, res) => {
  queryActividadF(req.params.id, genericCallback(res));
});

rutasActividadesF.route('/actividadesf/delete').delete((req, res) =>{
   deleteActividadF(req.body, genericCallback(res));
});

rutasActividadesF.route('/actividadesf/edit').patch((req, res)=>{
   editActividadF(req.body, genericCallback(res));

});

rutasActividadesF.route('/actividadesf/new').post((req, res) => {
  createActividadF(req.body, genericCallback(res));
});

export default rutasActividadesF;