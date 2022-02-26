import {PORT} from './config'
import app from "./app";
import './database'


app.listen(PORT);
console.log("server on port ", PORT)
