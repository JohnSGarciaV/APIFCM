import  Express  from 'express';
import { createVoluntario, deleteVoluntario, editVoluntario, queryAllVoluntarios } from '../controllers/voluntarios/voluntario.js';


const rutasVoluntario = Express.Router();

const genericCallback = (response) => (err, result) =>{
        if (err) {
            response.sendStatus(500).send(err.toString());
        } else {
            response.json(result)
        }
};


rutasVoluntario.route('/voluntarios').get((req, res) => {
  queryAllVoluntarios(genericCallback(res));
});

rutasVoluntario.route('/voluntarios/delete').delete((req, res) =>{
   deleteVoluntario(req.body, genericCallback(res));
});

rutasVoluntario.route('/voluntarios/edit').patch((req, res)=>{
   editVoluntario(req.body, genericCallback(res));

});

rutasVoluntario.route('/voluntarios/new').post((req, res) => {
  createVoluntario(req.body, genericCallback(res));
});

export default rutasVoluntario;