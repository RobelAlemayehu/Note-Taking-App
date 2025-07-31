import express from 'express'
import { getAllNotes } from '../controllers/noteController.js'
import { getNoteById } from '../controllers/noteController.js'
import { createNote } from '../controllers/noteController.js'
import { updateNote } from '../controllers/noteController.js'
import { deleteNote } from '../controllers/noteController.js'

const router = express.Router()

router.get('/', getAllNotes)
router.get('/id', getNoteById)
router.post('/',createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router






