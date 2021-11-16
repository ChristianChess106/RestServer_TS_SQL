import express,{Application} from "express";
import cors from 'cors';
import userRoutes from '../routes/usuario';
import db from "../db/connection";

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios:'/api/usuarios'
    };

    constructor(){
        this.app = express();
        this.port =process.env.PORT || '8082';

        //Conexion a DB
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Definicion de las rutas
        this.routes();
    };

    async conectarDB(){

        try {
            
            await db.authenticate();
            console.log('db Online');
            

        } catch (error: any) {
            throw new Error(error);
            
        }
    };

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta Publica
        this.app.use(express.static('public'));

    };

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    };

    listen(){

        this.app.listen(this.port, () =>{
            console.log(`Servidor corriendo en puerto wey ${this.port}`);
            
        });

    };
};

export default Server;
