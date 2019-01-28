import { IConfig } from './config/IConfig';
import * as express from 'express';

export default class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    const {
      app,
      config: { port }
    } = this;
    app.use('/health-check', (req, res) => {
      res.send(`I am OK.<br>App running on ${port}`);
    });
  }

  run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, (err: Error) => {
      if (err) {
        throw err;
      }
      console.log(`App is running at port: ${port}`);
    });
  }
}
