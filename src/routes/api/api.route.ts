import { Router } from 'express';
import { ApiController } from '../../controller';

const router = Router();

router.post(
    '/create_api_key',
    ApiController.createApiKey
);

export const ApiRoute = {
    router,
};
