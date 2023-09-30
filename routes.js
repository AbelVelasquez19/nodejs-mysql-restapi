const express = require('express')
const routes = express.Router();

routes.get('/',(req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('call sp_debt_lis(1,0)', (err, rows) => {
            console.log(rows)
            if(err) return res.send(err)
            res.json(rows[0])
        })
    })
})

routes.post('/',(req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO bills set ?',[req.body], (err, rows) => {
            if(err) return res.send(err)
            res.send('bell added!')
        })
    })
})

routes.delete('/:id',(req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('DELETE FROM bills WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.send('bell excluded!')
        })
    })
})

routes.post('/:id',(req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('UPDATE bills set ? WHERE id = ?',[req.body,req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.send('bell updated!')
        })
    })
})

module.exports = routes;