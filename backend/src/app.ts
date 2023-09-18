import express from "express";
import router from "./routes/index";
const app = express();
import cors from 'cors'

// Criar o middleware para permitir requisição externa
app.use(cors({
    origin: "*", // ou especificar os domínios permitidos
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use('/api', router);

export { app };