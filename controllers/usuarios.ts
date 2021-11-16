import { Request, Response } from "express";
import Usuario from '../models/usuario';



export const getUsuarios = async(req: Request, res: Response) => {

    const usuarios = await Usuario.findAll({
        where:{
            estado:true
        }
    });

    res.json(usuarios);

};

export const getUsuario = async(req: Request, res: Response) => {

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

    if(!usuario){
       return res.status(404).json({
            msg:`no existe usuario con el id ${id}`
        })
    }

    res.json(usuario);

};

export const postUsuario = async(req: Request, res: Response) => {

    const {body} = req;

    try {
        
        //Usuario.create(body) -> Crea la instancia y la guarda de una vez
        //Usuario.build(body) -> Crea la instancia
        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg:`ya existe un usuario con el email ${body.email}`
            })
        };

        const usuario = Usuario.build(body);
        await usuario.save();

        res.json(usuario);

    } catch (error) {
        console.log(error);
        
      return res.status(500).json({
            msg:'Hable con el administrador mijo',
        });
    }


};

export const putUsuario = async(req: Request, res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({
                msg:`el usuario con id ${id} no existe`
            })
        };

        await usuario.update(body);

        res.json(usuario);
       
    } catch (error) {
        console.log(error);
        
      return res.status(500).json({
            msg:'Hable con el administrador mijo',
        });
    }

};

export const deleteUsuario = async(req: Request, res: Response) => {

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg:`el usuario con id ${id} no existe`
        })
    };

    await usuario.update({estado:false});

    res.json({
        msg:'PutUsuarios',
        id
    });

};

