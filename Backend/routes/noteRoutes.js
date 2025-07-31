import express from 'express'

const router = express.Router()

router.get('/',(req, res) =>{
    res.status(200).sendStatus('You just fetched the notes')
})

router.post('/', (req, res) =>{
    res.status(200).json({message: 'post created successfully!'})
})

router.post('/', (req, res) =>{
    res.status(201).json({message: 'post updated successfully!'})
})


router.delete('/', (req, res) =>{
    res.status(201).json({message: 'note deleted successfully!'})
})

export default router






