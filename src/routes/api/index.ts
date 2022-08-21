import { Router } from 'express';
import { ApiRoute } from './api.route';

const router = Router();

const publicRoutes = [
    {
        path: '/',
        route: ApiRoute.router
    }
];

publicRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
