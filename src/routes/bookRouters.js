import { Router } from "express";
import { bookInsert, getBooks, bookRemove, bookUpdate } from "../controllers/bookControllers.js";
import { authorization } from "../auth/auth.js";


const router = Router();

//Endpoint de consulta de Books
router.get('/books', authorization, getBooks);

//Endpoint de consulta de Books pelo id
router.get('/books/:id', authorization, getBooks);

//Endpoint cadastrar um novo Books
router.post('/books', authorization, bookInsert);

//Endpoint para atualizar o cadastro de um Books
router.put('/books/:id', authorization, bookUpdate);

//Endpoint para excluir o cadastro de um Books
router.delete('/books/:id', authorization, bookRemove);

export default router;