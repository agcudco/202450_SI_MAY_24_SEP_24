import express from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'biblioteca'
});

db.connect(error=>{
    if(error){
        console.log("Error al establecer la conexion");
        return;
    }
    console.log("Conexion exitosa");
});


app.listen(3000,()=>{
    console.log("Server listening on Port 3000");
})

app.get("/",(req,res)=>{
    res.send("Bienvenidos a mi api");
});

const readData = ()=>{
    try{
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    }catch(error){
        console.log(error);
    }
}

app.get("/books",(req,res)=>{
    const data = readData();
    res.json(data.books);
});

app.get("/libros",(req,res)=>{
    const query = "SELECT * FROM libro";
    db.query(query,(error,results)=>{
        if(error){
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).json(results);
    });
});

app.get("/estudiantes",(req,res)=>{
    const query = "SELECT * FROM estudiante";
    db.query(query,(error,results)=>{
        if(error){
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).json(results);
    });
});

app.post("/libros",(req,res)=>{
    const {titulo, autor, editorial, nropaginas, stock, estado} = req.body;
    const query = "INSERT INTO libro(titulo, autor, editorial, nropaginas, stock, estado) VALUES(?,?,?,?,?,?)";
    db.query(query,[titulo, autor, editorial, nropaginas, stock, estado],(error,results)=>{
        if(error){
            res.status(500).json('Error al registar el libro');
            return;
        }
        res.status(200).json(`Libro registrado con el ID: ${results.insertId}`);
    });
});