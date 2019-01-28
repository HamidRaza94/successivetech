import { IConfig } from './config/IConfig';
import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from "body-parser";
import { notFoundRoute, errorHandler } from './libs';

export default class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  initBodyParser(): void {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }

  setupRoutes(): void {
    const {
      app,
      config: { port }
    } = this;

    app.use('/health-check', (req: Request, res: Response) => {
      res.send(`I am OK.<br>App running on ${port}`);
    });
    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  run(): void {
    const {
      app,
      config: { port }
    } = this;

    app.listen(port, (err: Error) => {
      if (err) throw err;
      console.log(`App is running at port: ${port}`);
    });
  }
}
