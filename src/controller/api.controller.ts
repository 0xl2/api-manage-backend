import { Request, Response } from 'express';
import axios from 'axios';
import { wrapRequestAsync } from '../utils/api';
import { uResponse } from '../service/types';
import httpStatus from 'http-status';

const createApiKey = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;

    uResponse(res, null, httpStatus.OK);
});

export const ApiController = {
    createApiKey
}
