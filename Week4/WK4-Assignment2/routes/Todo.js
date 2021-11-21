const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let todos = [
    {name: "Buy groceries", description: "Go to the store and buy groceries", completed: false, _id: uuidv4()},
    {name: "Gym", description: "Go gym and workout", completed: false, _id: uuidv4()},
    {name: "Pay bills", description: "Pay mortgage and utilities", completed: false, _id: uuidv4()},
    {name: "Clean house", description: "Clean kitchen, bathroom, rooms and living room", completed: false, _id: uuidv4()}
]

todoRouter
    .get('/', (req, res) => {
        res.send(todos)
    })

    .get('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const singleTodo = todos.find(todo => todo._id === todoId)

        res.send(singleTodo)
    })

    .post('/', (req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)

        res.send(`New todo ${newTodo.name} called added to the list1`)
    })

    .put('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        Object.assign(todos[todoIndex], req.body)

        res.send(`Todo has been updated`)
    })

    .delete('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)

        res.send(`Todo has been deleted`)
    })


module.exports = todoRouter