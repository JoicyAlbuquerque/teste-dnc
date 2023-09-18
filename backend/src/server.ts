import { app } from "./app";
import connectDB from "./db/connection";
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
export const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

// Conecte-se ao MongoDB
connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});