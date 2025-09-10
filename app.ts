import express from "express"
import type { Request, Response } from "express";
import {createConnection} from "typeorm";
// import { User } from "./entity/User";
import {router} from "./routes/routes";

const app = express();
const PORT = 4011;

app.use('/', router)
// createConnection().then(connection => {
//     console.log("database connected")
// }).catch((e) => {
//     console.log(e+"error")
// })

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "typeorm_user",   // or root
    password: "1234", 
    database: "all-india",
    synchronize: true,
    entities: ['./entity/*.ts'],
    // entities: [User],
    logging: true
}).then(connection => {
    console.log("database connected")
}).catch(error => console.log(error));

app.get('/test', (req: Request, res: Response) => {
    res.json({
        data: "test done"
    })
})

app.listen(PORT, (): void=> {
    console.log("server is running on port"+ PORT)
})