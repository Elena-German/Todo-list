const express = require("express")
const cors = require("cors");
//import { v4 as uuid } from 'uuid';

const app = express()

// Разрешаем запросы только с localhost:3000
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
 allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); //добавляет встроенное промежуточное ПО (middleware) для обработки данных в формате JSON из входящих запросов


const todos = [{
    id: '1',
    name: 'первая',
    info: 'инфо',
    isImportant: false,
    isCompleted: true
},
{
    id: '2',
    name: 'вторая',
    info: 'инфо2',
    isImportant: true,
    isCompleted: false
}]

// GET-запрос на получение списка задач
app.get("/todos", (req, res) => {
    res.json(todos);
})
// GET-запрос задачи по идентификатору
app.get('/todos/:id', (req, res) => {
    const todo = todos.find((item) => item.id === req.params.id);
    console.log(todo)
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send();
    }
});

// POST-запрос на добавление задачи
app.post('/todos', (req, res) => {
    const newTodo = {
        id: uuid(),
        name: req.body.name,
        info: req.body.info,
        isImportant: req.body.isImportant,
        isCompleted: req.body.isCompleted,
    };
    posts.push(newTodo);
    res.json(newTodo);
});

// PUT и PATCH запросы на обновление задачи
const update = (req, res) => {
    const id = req.params.id;
    const todo = todos.find((item) => item.id === id);
    if (todo) {
        if (req.body.name !== undefined) todo.name = req.body.name;
        if (req.body.info !== undefined) todo.info = req.body.info;
        if (req.body.isImportant !== undefined) todo.isImportant = req.body.isImportant;
        if (req.body.isCompleted !== undefined) todo.isCompleted = req.body.isCompleted;
        res.json(todo);
    } else {
        res.status(404).send();
    }
};
app.put('/todos/:id', update);
app.patch('/todos/:id', update);

// DELETE-запрос на удаление поста блога
app.delete('/todos/:id', (req, res) => {
    const index = todos.findIndex((item) => item.id === req.params.id);
    if (index >= 0) {
        const deleted = todos.splice(index, 1);        
        res.json(deleted[0]);
    } else {
        res.status(404).send();
    }
});


app.listen(4000, () => {
    console.log("Сервер запущен на порту 4000")
    //приложение ожидает входящие сообщения на определенном порту (4000) на хосте 
    // (доменное имя, при запуске на нашем компьютере это будет «localhost», что является псевдонимом для 127.0.0.1 
})