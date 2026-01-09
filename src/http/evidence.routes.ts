import { Router } from 'express';

export const evidenceRouter = Router();

evidenceRouter.post('/write', async (_req, res) => {
  // Real evidence writes already happen inside Atlas logic.
  // This endpoint exists to pressure-test evidence durability.
  res.status(200).end();
});
