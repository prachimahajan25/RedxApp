// With MySQL

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// db configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kamlapuri@123",
    database: 'redx_db'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to the database");
    }
});

// Table 1 - Insert Keywords
app.get('/insert_keywords', (req, res) => {
    const sql = 'INSERT INTO insert_keywords (id,val1, val2, val3, val4) VALUES (?,?,?,?,?)';
    db.query(sql, [2,'N', 'JD', 'HI', 'KO'], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log(result);
        return res.json({ message: 'Data inserted successfully in keyword table', result });
    });
});

// Table 2 - Insert Video
app.get('/insert_video',(req,res) => {
    const sql = 'INSERT INTO insert_video (id,title,thumbnail,date,videolink) VALUES (?,?,?,?,?)';
    db.query(sql,[1,'demoVideo','demoImg.jpg','12-08-10','http://demoVideoLink.com'],(err,result)=> {
        if(err) {
            console.log(err);
            return res.status(500).json({error:'Internal server error'});
        }
        console.log(result);
        return res.json({message:'Date Inserted successfully in videolink table',result});
    });
});


app.get('/', (req, res) => {
    return res.send('Backend Server Response');
});


app.listen(8000, () => {
    console.log(`Listening at port 8000`);
});
