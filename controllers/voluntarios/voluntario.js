import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";

const queryAllVoluntarios = async (callback) => {
    getDB().collection('voluntarios').find({}).toArray(callback);
}

const queryVoluntario = async (id, callback) => {
    await getDB().collection('voluntarios').findOne({ndoc: id},callback);
  }

const createVoluntario = async (dataProduct, callback) => {
    delete dataProduct.titulo;
    delete dataProduct.show;
    delete dataProduct.mensaje;
     getDB().collection('voluntarios').insertOne(dataProduct, callback);
}

const editVoluntario = async (dataProduct, callback) => {
    const filtro = { _id: new ObjectId(dataProduct.id) };
    delete dataProduct.id;
    const operacion = { $set: dataProduct };
    getDB().collection('voluntarios').findOneAndUpdate(filtro, operacion, callback);
}

const deleteVoluntario = async (dataProduct, callback) => {
    const filtro = {_id: new ObjectId(dataProduct.id)};
    delete dataProduct.id;
    const operacion ={ $set: dataProduct};
    getDB().collection('voluntarios').deleteOne(filtro, operacion, callback);
}


export { queryAllVoluntarios, queryVoluntario, createVoluntario, editVoluntario, deleteVoluntario }