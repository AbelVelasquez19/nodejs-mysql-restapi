import {pool} from '../db.js'

export const getDebts = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM bills');
        if(rows.length <= 0 ){
            return res.status(404).json({
                option:false,
                message:'registros no encontrados',
                data:null
            })
        }
        return res.status(200).json({
            option:true,
            message:'registros encontrados',
            data:rows
        })    
    } catch (error) {
        return res.json({
            message:'Algo salio mal'
        })
    }
}
export const getDebt = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM bills where id = ?',[req.params.id]);
        if(rows.length <= 0 ){
            return res.status(404).json({
                option:false,
                message:'registros no encontrados',
                data:null
            })  
        } 
        return res.status(200).json({
            option:true,
            message:'registros encontrados',
            data:rows
        })
    } catch (error) {
        return res.json({
            message:'Algo salio mal'
        })
    }
}
export const createDebet = async (req, res) =>{
    const {id_store,name_sol,name_produc,price,status} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO bills (id_store,name_sol,name_produc,price,status) VALUES(?,?,?,?,?)',[id_store,name_sol,name_produc,price,status]);
        res.send({
            id:rows.id,
            id_store,
            name_sol,
            name_produc,
            price,
            status
        })
    } catch (error) {
        return res.json({
            message:'Algo salio mal'
        })
    }
}
export const deleteDebet = async(req, res) => {
    const [result] = await pool.query('DELETE  FROM bills where id = ?',[req.params.id]);
    try {
        if(result.affectedRows <= 0){
            return res.status(404).json({
                option:false,
                message:'registro no eliminado',
            }) 
        }
        return res.status(200).json({
            option:true,
            message:'registro eliminado',
        })
    } catch (error) {
        return res.json({
            message:'Algo salio mal'
        })
    }
}
export const updateDebet = async(req, res) => {
    const {id} = req.params;
    const {id_store,name_sol,name_produc,price,status} = req.body
    try {
        const [result] = await pool.query('UPDATE bills set  id_store = IFNULL(?,id_store), name_sol = IFNULL(?,name_sol), name_produc = IFNULL(?,name_produc), price = IFNULL(?,price), status = IFNULL(?,status) where id = ?',[id_store,name_sol,name_produc,price,status,id]);
        if(result.affectedRows === 0){
            return res.status(404).json({
                option:false,
                message:'registro no actualizado',
                data:null
            }) 
        }
        const [rows] = await pool.query('SELECT * FROM bills where id = ?',[id]);
        return res.status(200).json({
            option:true,
            message:'registro actualizado',
            data:rows
        })    
    } catch (error) {
        return res.json({
            message:'Algo salio mal'
        })
    }
}