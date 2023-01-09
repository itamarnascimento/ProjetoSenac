import { Router } from "express";
import bookRouters from "./routes/bookRouters.js";
import usersRouters from "./routes/users_routers.js";

const routes = Router();

//Pagina principal
routes.post('/', (req, res) => {
    res.status(200).json({ message: "Bem vindo a nossa API!" })
})

routes.use(bookRouters, usersRouters);
export default routes;