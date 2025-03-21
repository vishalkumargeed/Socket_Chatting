import express from "express"
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const port = 3000;
import cors from "cors"

const server = createServer(app)
// creating server 
const io = new Server(server , {
    cors : {
        credentials : true,
        origin: "*",
        methods : ["GET" , "POST"],
    }
})


// when socket == user gets connected ! 
io.on("connection" , (socket) => {
    console.log("user get connected ")
    console.log("socket/user id : ", socket.id)
})



// when we have to deal with api we use 
/*
app.use(cors());    // to allow cross origin request
*/

app.get ("/" , (req,res) =>{
    res.send ("server hello   ")
})


server.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});