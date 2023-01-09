import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    __v: {
        select: false
    }
});

export const Users = mongoose.model('Users', userSchema);
