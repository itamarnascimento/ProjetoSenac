import mongoose from "mongoose";
const { Schema } = mongoose;

// esse é apenas o schema do documento ("tabela")

const bookSchemas = new Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishingCompany: {
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    __v: {
        type: Number,
        select: false
    }
});

export const Books = mongoose.model('Books', bookSchemas);