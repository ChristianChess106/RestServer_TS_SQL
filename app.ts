import dotenv from 'dotenv';
import Server from './models/server';

//Configuracion por defecto de dotenv - Variables de entorno
dotenv.config();


const server = new Server();
server.listen();
