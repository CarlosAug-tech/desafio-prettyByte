import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database';
import Routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
