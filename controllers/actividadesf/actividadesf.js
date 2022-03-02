import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";

const queryAllActividadF = async (callback) => {
  getDB().collection('actividadesf').find({}).toArray(callback);
}

const queryActividadF = async (id, callback) => {
  await getDB().collection('actividadesf').findOne({_id: new ObjectId(id)},callback);
}

const queryActividadFVoluntario = async (id, callback) => {
  console.log(ids);
  await getDB().collection('actividadesf').aggregate([{$match: {"participantes.id":id}}]).toArray(callback);
}

const createActividadF = async (dataActivity, callback) => {
  const participantes = [];
  dataActivity.participantes.map((elemento) => 
  participantes.push({id: new ObjectId(elemento.id), nombre: elemento.nombre, ndoc: elemento.ndoc, rol: elemento.rol}));
  dataActivity.participantes=participantes;
  getDB().collection('actividadesf').insertOne(dataActivity, callback);
}

const editActividadF = async (dataActivity, callback) => {
  const filtro = { _id: new ObjectId(dataActivity.id) };
  delete dataActivity.id;
  const operacion = { $set: dataActivity };
  getDB().collection('actividadesf').findOneAndUpdate(filtro, operacion, callback);
}

const deleteActividadF = async (dataActivity, callback) => {
  const filtro = {_id: new ObjectId(dataActivity.id)};
  delete dataActivity.id;
  const operacion ={ $set: dataActivity};
  getDB().collection('actividadesf').deleteOne(filtro, operacion, callback);
}


export { queryAllActividadF, queryActividadF, createActividadF, editActividadF, deleteActividadF, queryActividadFVoluntario }