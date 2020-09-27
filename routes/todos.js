const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()
router.get('/', async (req, res) => {
    const todos = await Todo.find({}) 
    
    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
 })
router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})
router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: res.body.title
        
    })
   await todo.Save()
   res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(res.body.id)
    todo.completed = !!req.body.completed
    await todo.Save()
    res.redirect('/')
})
module.exports = router