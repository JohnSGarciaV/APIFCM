import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";

const queryAllActividadV = async (callback) => {
  getDB().collection('actividadesv').find({}).toArray(callback);
}

const queryActividadV = async (id, callback) => {
  await getDB().collection('actividadesv').findOne({_id: new ObjectId(id)},callback);
}

const queryActividadVoluntario = async (id, callback) => {
  console.log(id);
  await getDB().collection('actividadesv').aggregate([{$match: {"participantes.id":id}}]).toArray(callback);
}


const createActividadV = async (dataActivity, callback) => {
  const participantes = [];
  dataActivity.participantes.map((elemento) => 
  participantes.push({id: new ObjectId(elemento.id), nombre: elemento.nombre, ndoc: elemento.ndoc, rol: elemento.rol}));
  dataActivity.participantes=participantes;
  getDB().collection('actividadesv').insertOne(dataActivity, callback);
}

const editActividadV = async (dataActivity, callback) => {
  const filtro = { _id: new ObjectId(dataActivity.id) };
  delete dataActivity.id;
  const operacion = { $set: dataActivity };
  getDB().collection('actividadesv').findOneAndUpdate(filtro, operacion, callback);
}

const deleteActividadV = async (dataActivity, callback) => {
  const filtro = {_id: new ObjectId(dataActivity.id)};
  delete dataActivity.id;
  const operacion ={ $set: dataActivity};
  getDB().collection('actividadesv').deleteOne(filtro, operacion, callback);
}


export { queryAllActividadV, queryActividadVoluntario, queryActividadV, createActividadV, editActividadV, deleteActividadV }