const Ceaser = "Marcus Aurelius"
console.log(Ceaser)

const express = require("express");
const db = require("./routes/db.config");
const dotenv = require("dotenv").config();

const app =  express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 2008;
const server = require("http").Server(app)
const session = require("express-session");
const shortid = require("shortid"); 
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
// const LoggedIn = require("./controllers/loggedin");
const MySQLStore = require('express-mysql-session')(session);


const io = require("socket.io")(server, {
    port: 5000 // Change this to your desired port number
  })

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(express.json());

// Configure the session store
const sessionStore = new MySQLStore({
  host: process.env.DATABASE_HOST,
  port: '3306',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
}));

app.set("view engine", "ejs");

app.set("views", ["./views"]);


app.use("/assets", express.static(__dirname + "/public/assets/", { type: 'text/folder' }))
// app.use("/assets", express.static(__dirname + "/public/assets", { type: 'text/javascript' }))


app.use("/assets/images", express.static(__dirname + "/public//assets/images", {type: 'text/folder'}))
// app.use("/files/images", express.static(__dirname + "/public/files/images", {type: 'file/image'}))
// app.use("/userUploads/Audio", express.static(__dirname + "/public/userUpload/audio", {type:'file/media'}))
// app.use("/userUploads/Videos", express.static(__dirname + "/public/userUpload/videos", {type:'file/media'}))



db.connect((err) => {
    if(err) throw err;
    console.log(`Database connected on Port ${PORT}`);
})


let socketsConnected = new Set();

io.on('connection', onConnected);

function onConnected(socket) {
  // console.log('Socket connected', socket.id);
  socketsConnected.add(socket.id);
  io.emit('clients-total', socketsConnected.size);

  socket.on('disconnect', () => {
    // console.log('Socket disconnected', socket.id);
    socketsConnected.delete(socket.id);
    io.emit('clients-total', socketsConnected.size);
  });

  // Generate a unique room ID for this pair of users
  // const roomId_ = shortid.generate();
  
  socket.on("join-room", async (roomId, userId) =>{
    socket.join(roomId); // Join the room
  // console.log(roomId)
  })

  socket.on("message", async (data, roomId, userId) => {
    const recipientId = data.receiver;
    const content = data.message;
    const senderId = data.name;
    const timestamp = data.dateTime;
  
    const buffer_id = data.inbox

    const query = "INSERT INTO messages (sender_id, recipient_id, content, timestamp, buffer) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [senderId, recipientId, content, timestamp, buffer_id], (err, results) => {
      if (err) {
        console.error("Error saving message to the database:", err);
      } else {
        // Emit the message only to the users in the same room
        io.to(roomId).emit("chat-message", data);
      }
    });
  });

  socket.on("feedback", (data) => {
    socket.broadcast.emit("feedback", data);
  });

  // THE SOCKET IO CHAT SYSTEM FOR SPACES GOES HERE
  socket.on('join-group-chat', async (roomId) => {
    socket.join(roomId); // Join the group chat room
  });

  socket.on('leave-group-chat', async (roomId) => {
    socket.leave(roomId); // Leave the group chat room
  });

  socket.on('group-chat-message', async (data, roomId) => {
    const content = data.message;
    const senderId = data.name;
    const timestamp = data.dateTime;

    // Save the message to the database with the group chat room ID
    const buffer_id = data.inbox

    const query = "INSERT INTO spaces_messages (sender_id, content, timestamp, buffer) VALUES (?, ?, ?, ?)";
    db.query(query, [senderId, content, timestamp, buffer_id], (err, results) => {
      if (err) {
        console.error("Error saving message to the database:", err);
      } else {
    // Emit the message to all users in the group chat
    io.to(roomId).emit('group-chat-message', data);
      }
    });

  });
  

  // SOCKET IO CODE FOR THE VIDEO CONFERENCING
  socket.on('join-vc', (roomId_vc, userId_vc) => {
    socket.join(roomId_vc);
    console.log(roomId_vc)
    socket.to(roomId_vc).broadcast.emit('user-connected-vc', userId_vc);

    socket.on('disconnect_vc', () => {
      socket.to(roomId_vc).broadcast.emit('user-disconnected-vc', userId_vc);
    });
  });
}
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

// app.use("/update/newPasword", require("./controllers/updatePassword"))


server.listen(PORT);