import { Request, Response, NextFunction } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) return next(err);
  const { error, message, status } = err;
  res.status(status).json({
    error: error || 'undefined',
    message: message || 'Error Occurred',
    status: status || 'undefined',
    timestamp: new Date()
  });
  next();
}
