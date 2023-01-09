import { mongoose } from "mongoose";
mongoose.set('strictQuery', true);


export const startDB = () => {
    mongoose.connect(process.env.URL_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("conectado ao banco de dados!"));
};


