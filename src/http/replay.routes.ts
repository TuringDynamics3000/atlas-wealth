import { Router } from 'express';

export const replayRouter = Router();

replayRouter.get('/advice', async (_req, res) => {
  // Stubbed replay for now – real replay can be wired later
  res.status(200).json({ events: [] });
});
