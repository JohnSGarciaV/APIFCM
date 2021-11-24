import  Express  from 'express';
import { queryAllActividadV, queryActividadV, createActividadV, editActividadV, deleteActividadV } from '../controllers/actividadesv/actividadesv.js';



const rutasActividadesV = Express.Router();

const genericCallback = (response) => (err, result) =>{
        if (err) {
          response.sendStatus(500).send(err.toString());
        } else {
            response.json(result)
        }
};


rutasActividadesV.route('/actividadesv').get((req, res) => {
  queryAllActividadV(genericCallback(res));
});

rutasActividadesV.route('/actividadv/:id').get((req, res) => {
  queryActividadV(req.params.id, genericCallback(res));
});

rutasActividadesV.route('/actividadesv/delete').delete((req, res) =>{
   deleteActividadV(req.body, genericCallback(res));
});

rutasActividadesV.route('/actividadesv/edit').patch((req, res)=>{
  console.long("Entro");
   editActividadV(req.body, genericCallback(res));

});

rutasActividadesV.route('/actividadesv/new').post((req, res) => {
  createActividadV(req.body, genericCallback(res));
});

export default rutasActividadesV;