import express from 'express'
import { getMember } from '../Controllers/memberController.js'

const memberRouter = express.Router()

memberRouter.get('/', getMember)

export default memberRouter