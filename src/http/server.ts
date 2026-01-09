import express from 'express';
import bodyParser from 'body-parser';

import { adviceRouter } from './advice.routes';
import { evidenceRouter } from './evidence.routes';
import { replayRouter } from './replay.routes';

const app = express();
app.use(bodyParser.json());

app.use('/advice', adviceRouter);
app.use('/evidence', evidenceRouter);
app.use('/replay', replayRouter);

const port = 3000;
app.listen(port, () => {
  console.log('Atlas API listening on http://localhost:' + port);
});
