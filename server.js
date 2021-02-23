const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');

//use middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//use mongoDB database
connectDB();

//init api routes
app.use('/api/news', newsRoutes);

//all other api requests
app.use('/api/*', (req, res, next) => {
    res.status(404);
    res.json({
        message: `Not Found - ${req.originalUrl}`
    });
});

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//init server
const port = process.env.PORT || 5000;
server = http.createServer(app);
server.listen(port, () => console.log(`Server started on port ${port}`));

//WebSocket setup
const WebSocket = require('ws');
const wss = new WebSocket.Server({server});
wss.on('connection', connection = (ws) => {
    console.log('socket connected...');
    ws.room = "";
    ws.on('message', incoming = (data) => {
        console.log(data);
        if(data.startsWith('join ')){
            ws.room = data.split(' ')[1];
        }else if(data.startsWith('ready ')){
            var phone = data.split(' ')[1];
            var facilityReq = data.split(' ')[2];
            wss.clients.forEach(each = (client) => {
                if (client.readyState === WebSocket.OPEN && client.room === facilityReq) {
                    client.send(`Ready for ${phone}`);
                }
            });
        }else{
            ws.send(JSON.stringify({
                error: `Route not found: ${data}`
            }));
        }
    });
    ws.on('error',e=>console.log(e))
    ws.on('close',(e)=>console.log('websocket closed'+e))
  });