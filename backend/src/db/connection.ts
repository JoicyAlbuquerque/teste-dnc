import mongoose from 'mongoose';
import initializeDatabase from './initializeDatabase';
require('dotenv').config()

// URI de conexão para o banco de dados MongoDB
const uri = process.env.DB_URI;

/**
 * Função assíncrona para conectar ao banco de dados MongoDB e inicializar o banco de dados com dados mockados.
 * 
 * @returns Uma promessa que é resolvida após a conexão bem-sucedida com o banco de dados e a inicialização do banco de dados.
 */
const connectDB = async () => {
  try {
    // Tentando conectar ao banco de dados MongoDB usando a URI fornecida
    await mongoose.connect(uri!);
    
    // Mensagem de log indicando que a conexão com o MongoDB foi bem-sucedida
    console.log('MongoDB connected successfully');
    
    // Chamando a função para inicializar o banco de dados com dados mockados
    return initializeDatabase();
  } catch (error) {
    // Mensagem de erro logada no console se a conexão com o MongoDB falhar
    console.error('Error connecting to MongoDB', error);
    
    // Encerrando o processo com um código de status 1 para indicar uma finalização anormal
    process.exit(1);
  }
};

export default connectDB;
