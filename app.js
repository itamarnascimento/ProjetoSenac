import { startDB } from "./src/db/database.js";
import app from "./src/index.js";
import * as dotenv from "dotenv";

dotenv.config();
startDB();

const port = 3002;

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
