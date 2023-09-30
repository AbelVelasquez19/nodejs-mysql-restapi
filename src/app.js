import express from 'express'
import debtRoutes from './routes/debet.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()
app.use(express.json())


app.use(indexRoutes)
app.use('/api',debtRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message:'pagina no encontrado'
    })
})

export default app