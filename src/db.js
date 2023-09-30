import { createPool } from "mysql2/promise"
import { DB_HOTS,DB_PORT,DB_DATABASE,DB_USER,DB_PASSWORD } from "./config.js"
export const pool = createPool({
    host: DB_HOTS,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE
})

