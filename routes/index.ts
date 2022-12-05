import express from 'express'
import admin from '../controller/index'

const router = express.Router()

router.get('/getPage', admin.todoGet)

export default router
