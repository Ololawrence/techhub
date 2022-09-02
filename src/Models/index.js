import mongoose from "mongoose";
import Register from './Registration.Models';
mongoose.Promise= global.Promise;

const db = {};
db.Register = Register;

db.mongoose=mongoose;

export default db;