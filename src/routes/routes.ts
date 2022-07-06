import { URLController } from '../controllers/Url.controller';
import express, {Router} from 'express'

const urlController = new URLController();

const router = Router();

router.post('/shorten', urlController.shorten);
router.get('/:hash', urlController.redirect);

export default router;



