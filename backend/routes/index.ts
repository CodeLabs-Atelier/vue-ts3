import express from 'express';
import home from './home'
import profile from './profile'

const router = express.Router();

router.use('/', home)
router.use('/profile', profile)

export default router;