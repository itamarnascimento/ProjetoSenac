import { Books } from "../models/bookModel.js";


export async function bookInsert(req, res) {
    try {
        const { isbn, title, genre, publishingCompany, author } = req.body;

        const book = new Books({ isbn, title, genre, publishingCompany, author });

        await book.save();

        res.status(201).json({ message: "Livro cadastrado com sucesso!" });
    } catch (error) {
        console.error(error)
    }
}

export async function getBooks(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            const books = await Books.find();
            if (!books) res.status(204);
            else res.status(200).json(books);
        } else {
            let book = await Books.findOne({ _id: id });
            if (!book) res.status(204);
            else res.status(200).json(book);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." })
    }
}

export async function bookRemove(req, res) {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);

        if (!book) res.status(404).json({ message: "livro não encontrado." });
        else {
            await Books.findByIdAndDelete(id);
            res.status(200).json({ message: "livro deletado com sucesso." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

export async function bookUpdate(req, res) {
    try {
        const { id } = req.params;
        const { isbn, title, genre, publishingCompany, author } = req.body;

        const book = await Books.findById(id);
        if (!book) res.status(404).json({ message: "Livro não encontrado." });
        else {
          
            book.isbn = isbn ?? book.isbn;
            book.title = title ?? book.title;
            book.genre = genre ?? book.genre;
            book.publishingCompany = publishingCompany ?? book.publishingCompany;
            book.author = author ?? book.author;
            await Books.findByIdAndUpdate(id, book);
            res.status(200).json({ message: "Livro alterado com sucesso." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}