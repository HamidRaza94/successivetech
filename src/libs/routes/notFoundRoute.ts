import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  return next({
    error: 'not found',
    message: 'Not Found Route',
    status: '404'
  });
}
