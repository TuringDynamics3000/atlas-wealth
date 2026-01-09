/**
 * ARCHITECTURAL NOTE
 *
 * This file defines HTTP boundaries only.
 * - No business logic belongs here
 * - No direct state mutation occurs here
 * - AuthorityContext enforcement happens downstream
 * - All mutations must emit durable evidence
 *
 * This separation is intentional.
 */
import { Router } from 'express';

export const replayRouter = Router();

replayRouter.get('/advice', async (_req, res) => {
  // Stubbed replay for now – real replay can be wired later
  res.status(200).json({ events: [] });
});

