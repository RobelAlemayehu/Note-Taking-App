const express = require('express')

const app = express()

app.get('/api/notes', (req, res) =>{
    res.status(200).sendStatus('Your got 5 notes')
})

app.post('/api/notes', (req, res) =>{
    res.status(200).json({message: 'post created successfully!'})
})
app.post('/api/notes:id', (req, res) =>{
    res.status(201).json({message: 'post updated successfully!'})
})
app.delete('/api/notes:id', (req, res) =>{
    res.status(201).json({message: 'note deleted successfully!'})
})

app.listen(5001, ()=>{
    console.log('Server started on PORT: 5001')
})