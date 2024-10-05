const socket=require("socket.io-client")

const io=socket()

io.emit("hello","hello")