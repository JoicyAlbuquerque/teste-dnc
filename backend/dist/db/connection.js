"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const initializeDatabase_1 = __importDefault(require("./initializeDatabase"));
require('dotenv').config();
// URI de conexão para o banco de dados MongoDB
const uri = process.env.DB_URI;
/**
 * Função assíncrona para conectar ao banco de dados MongoDB e inicializar o banco de dados com dados mockados.
 *
 * @returns Uma promessa que é resolvida após a conexão bem-sucedida com o banco de dados e a inicialização do banco de dados.
 */
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tentando conectar ao banco de dados MongoDB usando a URI fornecida
        yield mongoose_1.default.connect(uri);
        // Mensagem de log indicando que a conexão com o MongoDB foi bem-sucedida
        console.log('MongoDB connected successfully');
        // Chamando a função para inicializar o banco de dados com dados mockados
        return (0, initializeDatabase_1.default)();
    }
    catch (error) {
        // Mensagem de erro logada no console se a conexão com o MongoDB falhar
        console.error('Error connecting to MongoDB', error);
        // Encerrando o processo com um código de status 1 para indicar uma finalização anormal
        process.exit(1);
    }
});
exports.default = connectDB;
