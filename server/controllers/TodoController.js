import express from 'express'
import todoRepo from '../repositories/TodoRepository'
import { dd } from '../logger'

const TodoController = express.Router()

.get('/', (req, res, next) => {
	todoRepo.all().then((todos) => {
		res.send(todos)
	}, next)
})

.post('/', (req, res, next) => {
	todoRepo.create(req.body).then((todo) => {
		res.send(todo)
	}, next)
})

.put('/:id', (req, res, next) => {
	const id = req.params.id
	
	todoRepo.update(id, req.body).then((todo) => {
		res.send(todo)
	}, next)
})

.delete('/completed', (req, res, next) => {
	todoRepo.removeCompleted().then((deletedCount) => {
		res.send({error: false, message: 'deleted sucessfully'})
	}, next)
})

.delete('/:id', (req, res, next) => {
	const id = req.params.id

	todoRepo.remove(id).then((deletedCount) => {
		res.send({error: false, message: 'deleted sucessfully'})
	}, next)
})

export default TodoController